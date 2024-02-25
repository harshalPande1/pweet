import userModel from "./model"
import bcrypt from 'bcrypt'
import iUser from "./interface";
class UserServices {
    private userModel = userModel;


    public create = async (body: iUser): Promise<string> => {
        try {
            let password = bcrypt.hash(body.password, 10);
            await this.userModel.create({ ...body, password: password });
            return "user registerd successfully..."
        } catch (error) {
            throw error
        }
    }
}

export default UserServices