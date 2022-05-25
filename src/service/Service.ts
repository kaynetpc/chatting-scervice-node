import UserService from '../modules/user/service/UserService';
import {ILoginRequest} from '../interface/login.req.types';
import {IUserData} from '../modules/user/interface/user.req.types';
import ResponseError from '../response/ResponseError';
import MessageService from '../modules/message/service/MessageService';
import {IMessageData, IMassageAction} from '../modules/message/interface/message.types';
import ConversationService from '../modules/conversation/service/ConversationService';
import {IConversationData} from '../modules/conversation/interface/conversations.types';
export default class MainService {
  static auth = async (param: ILoginRequest) => {
    try {
      const result = await UserService.login(param);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };

  static authRegister = async (param: IUserData) => {
    try {
      const result = await UserService.register(param);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };

  /** Get single user */
  static getUserById = async (id: string) => {
    try {
      const result = await UserService.getUserById(id);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };


  /** get messages all */
  static messages = async (conversationId: string) => {
    try {
      const result = await MessageService.getMessages(conversationId);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };

  /** send message*/
  static sendMessage = async (data: IMessageData) => {
    try {
      const result = await MessageService.sendMessage(data);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };

  /** mark message as read*/
  static updateMessageReadStatus = async (data: IMassageAction) => {
    try {
      const result = await MessageService.markTodayMessagesAsRead(data);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };

  static conversation = async (data: IConversationData) => {
    try {
      const result = await ConversationService.createNewConversation(data);
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  };
}
