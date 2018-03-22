import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const userSchema = new Schema({
  firstName:  { type: String, required: true },
  lastName: String,
  password: String,
  username: {
    type: String,
    unique: true,
  },
});

const user = model<IUser>('User', userSchema);
export default user;
