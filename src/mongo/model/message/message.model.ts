import {model} from 'mongoose';
import {MessageSchema} from '../../schema/message/message.schema';

export const MessageModel = model('message', MessageSchema);
