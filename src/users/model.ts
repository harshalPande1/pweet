import mongoose from "mongoose";
import iUser from "./interface";
const useSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    birthDate : String,
   birthMonth : String,
    birthYear : String,
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const userModel = mongoose.model<iUser>('users', useSchema);

export default userModel