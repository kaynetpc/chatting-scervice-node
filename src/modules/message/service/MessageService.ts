import ResponseError from '../../../response/ResponseError';
import MessageRepository from '../repo/MessageRepo';
import {IResponseFormat, ResponseService} from '../../../response/ResponseService';
import {IMessageData, IMassageAction} from '../interface/message.types';
export default class MessageService {
  // fetch messages
  static async getMessages(conversationId: string): Promise<IResponseFormat> {
    try {
      const data = await MessageRepository.findAllMessages(conversationId);
      if (!data) {
        return {
          message: 'Message not retrieved!',
          statusCode: ResponseError.NOT_FOUND,
          error: true,
        };
      }
      const result: IResponseFormat = {
        message: 'Message retrieved',
        data: data,
        error: false,
        statusCode: 200,
      };
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  // send message
  static async sendMessage(param: IMessageData): Promise<IResponseFormat> {
    try {
      const data = await MessageRepository.create(param);
      if (data) {
          const result: IResponseFormat = {
            message: 'Message sent',
            data: data,
            error: false,
            statusCode: 200,
          };
          return result;
      }
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  static async retrieveMessage(userId: string): Promise<IResponseFormat> {
    try {
      const data = await MessageRepository.findByReceiverId(userId);
      const result: IResponseFormat = {
        message: 'Message Retrieve',
        data: data,
        error: false,
        statusCode: 200,
      };
      return result;
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }

  static async markTodayMessagesAsRead(param: IMassageAction): Promise<IResponseFormat> {
    try {
      const currentDate = new Date();
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      const data = await MessageRepository.findBySenderAndReceiverAndDateCreate({receiver: param.adversary_id, sender: param.user_id, date: date});
      if (data) {
        const modifiedData = updateArrayObject(data, 'read_status', true);
        const updatedData = await MessageRepository.createMany(modifiedData);
        const result: IResponseFormat = {
          message: 'Mark Message as read',
          data: updatedData,
          error: false,
          statusCode: 200,
        };
        return result;
      }
    } catch (error: any) {
      throw ResponseError.get(error);
    }
  }
}

const updateArrayObject = (arr: any[], keyName: string, keyValue: any): any[] => {
  const temp = [];
  arr.forEach((el) => {
    for (const key in el) {
      if (key === keyName) {
        el[keyName] = keyValue;
      }
    }
    temp.push(el);
  });
  return temp;
};
