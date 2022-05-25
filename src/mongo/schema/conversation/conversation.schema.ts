import {Schema} from 'mongoose';
import {ConversationEntities} from '../../entities/conversation/conversation.entities';

export const ConversationSchema = new Schema<ConversationEntities>({
  members: {required: true, type: []},
}, {timestamps: true});
