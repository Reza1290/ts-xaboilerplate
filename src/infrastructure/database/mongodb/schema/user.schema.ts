import mongoose, { Schema } from "mongoose";

export interface UserDocument extends Document {
    _id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
}

const UserSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, required: true },
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);