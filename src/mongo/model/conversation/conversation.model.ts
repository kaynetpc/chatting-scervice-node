import {model} from 'mongoose';
import {ConversationSchema} from '../../schema/conversation/conversation.schema';

export const ConversationModel = model('conversations', ConversationSchema);
