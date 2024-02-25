import { Document } from "mongoose";

interface iUser extends Document {
    name: string;
    phoneNo: string;
    date: string;
    month: string;
    year: string;
    email: string;
    password: string;
}

export default iUser