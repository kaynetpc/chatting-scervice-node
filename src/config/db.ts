import mongoose from 'mongoose';
import {AppConfigs} from './app';

export const connectDB = async () => {
  return mongoose.connect(AppConfigs.DATABASE_URL);
};
