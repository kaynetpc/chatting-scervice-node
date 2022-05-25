import {MessageModel} from '../../../mongo/model/message/message.model';
import {IMessageData} from '../interface/message.types';


export default class MessageRepository {
  static async findById(id: any) {
    return await MessageModel.findById(id);
  }

  static async findBySenderId(fromUser: any) {
    return await MessageModel.find({from_user: fromUser});
  }

  static async findByReceiverId(receiverId: any) {
    return await MessageModel.find({to_user: receiverId});
  }

  static async findBySenderAndReceiver(data: {sender: any, receiver: any}) {
    return await MessageModel.find({to_user: data.receiver, from_user: data.sender});
  }

  static async findBySenderAndReceiverAndDateCreate(data: {sender: any, receiver: any, date: Date}) {
    return await MessageModel.find({to_user: data.receiver, from_user: data.sender, created_at: data.date});
  }

  static async findAllMessages(conversationId: any) {
    return await MessageModel.find({conversationId: conversationId});
  }

  static async createMany(data: IMessageData[]) {
    return await MessageModel.create(...data);
  }

  static async create(data: IMessageData) {
    return await MessageModel.create(data);
  }
}
