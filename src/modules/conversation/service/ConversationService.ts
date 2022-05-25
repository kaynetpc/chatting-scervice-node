import ResponseError from '../../../response/ResponseError';
import {IResponseFormat} from '../../../response/ResponseService';
import {IConversationData} from '../interface/conversations.types';
import ConversationRepository from '../repo/ConversationRepo';

export default class ConversationService {
  static createNewConversation = async (param: IConversationData): Promise<IResponseFormat> => {
    try {
      const newConversation = await ConversationRepository.create(param);
      const result: IResponseFormat = {
        message: 'Conversation Created',
        data: newConversation,
        error: false,
        statusCode: 200,
      };
      return result;
    } catch (err) {
      const result: IResponseFormat = {
        message: 'Error Occur!',
        data: err,
        error: true,
        statusCode: ResponseError.INTERNAL_SERVER_ERROR,
      };
      return result;
    }
  };


  // Find conversation
  static getConversation = async (userId: string): Promise<IResponseFormat> => {
    try {
      const data = await ConversationRepository.find(userId);
      const result: IResponseFormat = {
        message: 'Conversation Retrieved!',
        data: data,
        error: false,
        statusCode: 200,
      };
      return result;
    } catch (err) {
      const result: IResponseFormat = {
        message: 'Error Occur!',
        data: err,
        error: true,
        statusCode: ResponseError.INTERNAL_SERVER_ERROR,
      };
      return result;
    }
  };

  // Find conversation for two parties
  static getPartiesConversation = async (users: string[]): Promise<IResponseFormat> => {
    try {
      const data = await ConversationRepository.findOne(users);
      const result: IResponseFormat = {
        message: 'Conversation Retrieved!',
        data: data,
        error: false,
        statusCode: 200,
      };
      return result;
    } catch (err) {
      const result: IResponseFormat = {
        message: 'Error Occur!',
        data: err,
        error: true,
        statusCode: ResponseError.INTERNAL_SERVER_ERROR,
      };
      return result;
    }
  };
}
