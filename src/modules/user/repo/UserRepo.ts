import {UserModel} from '../../../mongo/model/user/user.model';
import {IUserData} from '../interface/user.req.types';

export default class UserRepository {
  static async findByName(name: string) {
    return await UserModel.findOne({name: name});
  }
  static async findById(id: any) {
    return await UserModel.findById(id);
  }

  static async findAll() {
    return await UserModel.find();
  }

  static async create(data: IUserData) {
    return await UserModel.create(data);
  }

  static async update(id: any, data: IUserData) {
    return await UserModel
        .findByIdAndUpdate(id, data, {useFindAndModify: false});
  }

  static async delete(id: any) {
    return await UserModel
        .findByIdAndDelete(id);
  }
}
