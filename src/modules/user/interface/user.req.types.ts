import {IMessageData} from '../../message/interface/message.types';
export interface IUserData {
    name: string;
    password: string;
    token?: string;
    refreshToken?: string;
    inbox?: IMessageData[];
    outbox?: IMessageData[];
}
