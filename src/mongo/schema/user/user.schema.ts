import {Schema} from 'mongoose';
import {UserEntities} from '../../entities/user/user.entities';

export const UserSchema = new Schema<UserEntities>({
  name: {required: true, type: String},
  password: {required: true, type: String},
  token: {required: false, type: String},
  refreshToken: {required: false, type: String},
  inbox: {required: false, type: []},
  outbox: {required: false, type: []},
});
