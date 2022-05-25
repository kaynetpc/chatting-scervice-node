import {Schema} from 'mongoose';
import {MessageEntities} from '../../entities/message/message.entities';

export const MessageSchema = new Schema<MessageEntities>({
  contents: {required: true, type: String},
  read_at: {required: false, type: String},
  from_user: {required: true, type: String},
  to_user: {required: false, type: String},
  read_status: {required: false, type: Boolean},
  conversationId: {required: false, type: String},
}, {timestamps: true});
