import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../repo/UserRepo';
import {ILoginRequest} from '../../../interface/login.req.types';
import ResponseError from '../../../response/ResponseError';
import {AppConfigs} from '../../../config/app';
import {IResponseFormat} from '../../../response/ResponseService';
import {IUserData} from '../interface/user.req.types';
export default class UserService {
  /** Login */
  static async login(req: ILoginRequest): Promise<IResponseFormat> {
    try {
      const data = await UserRepository.findByName(req.name);
      if (data) {
        const comparePassword = await bcrypt.compare(req.password, data.password);
        if (!comparePassword ) {
          throw new ResponseError('password is incorrect', 404);
        }
        const tokenData: any = {
          name: data.name, userId: data.id,
        };
        const generateAccessToken = jwt.sign(
            tokenData, AppConfigs.ACCESS_TOKEN_SECRET, {
              expiresIn: AppConfigs.TOKEN_SECRET_LIFE,
            });
        const generateRefreshToken = jwt.sign(
            tokenData, AppConfigs.REFRESH_TOKEN_SECRET, {
              expiresIn: AppConfigs.REFRESH_TOKEN_SECRET_LIFE,
            });
        data.token = generateAccessToken;
        data.refreshToken = generateRefreshToken;
        // update user info
        const result = await data.save();
        return {
          message: 'Login Success',
          statusCode: 200,
          data: result,
        };
      }
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  /** Register */
  static async register(data: IUserData): Promise<IResponseFormat> {
    try {
      try {
        // Check if user exist
        const user = await UserRepository.findByName(data.name);
        if (user) return {message: 'User already exist', statusCode: 409, data: null, error: true};

        // Hash password
        const newPassword = await bcrypt.hash(data.password, Math.random());
        data.password = newPassword;
        const result = await UserRepository.create(data);

        return {message: 'User created', statusCode: 201, data: result, error: false};
      } catch (error) {
        return {message: 'Error occur', statusCode: 500, data: error, error: true};
      }
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  /** Register */
  static async getUserById(id: string): Promise<IResponseFormat> {
    try {
      // Check if user exist
      const user = await UserRepository.findById(id);
      if (!user) {
        return {message: 'User not fount',
          statusCode: ResponseError.NOT_FOUND, data: null, error: false};
      }
      return {message: 'User Retrieved', statusCode: 200, data: user, error: false};
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }
}
