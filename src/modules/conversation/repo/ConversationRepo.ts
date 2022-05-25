import {ConversationModel} from '../../../mongo/model/conversation/conversation.model';
import {IConversationData} from '../interface/conversations.types';


export default class ConversationRepository {
  static async find(userId: string) {
    return await ConversationModel.find({members: {$in: [userId]}});
  }

  static async findOne(userIds: string[]) {
    return await ConversationModel.findOne({members: {$all: [...userIds]}});
  }

  static async create(data: IConversationData) {
    return await ConversationModel.create(data);
  }
}
