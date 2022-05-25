import {model} from 'mongoose';
import {UserSchema} from '../../schema/user/user.schema';

export const UserModel = model('user', UserSchema);
