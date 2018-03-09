import mongoose = require('mongoose');

export interface IUser extends mongoose.Document {
    firstName: string,
    lastName?: string,
    email: string,
    password: string,
};

export let UserSchema: mongoose.Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

export const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>("User", UserSchema);