import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
    clerkId: string,
    name: string,
    username: string,
    email: string,
    password: string,
    picture: string
}

const UserSchema = new Schema ({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    picture: { type: String, required: true },
})

const User = models.User || model('User', UserSchema)
export default User