import mongoose from 'mongoose';
import { AdminSchema } from '../../database/mongo/schema/admin';
import { AdminData } from '../../../entities/admin';
// import bcrypt from "bcrypt";
import { LoginStatus } from '../../../entities/interface';

// Schema
const entityName = "Admin";
const Admin = mongoose.model(entityName, AdminSchema)

const repository = {
    login: async ({ email, password }: AdminData): Promise<AdminData | LoginStatus> => {
        console.log("admin login repository function")
        const loginedUser: any = await Admin.findOne({ email });
        console.log(loginedUser);
        
        if (loginedUser) {
            // const passwordVerify = await bcrypt.compare(password, loginedUser?.password);
            const passwordVerify = password == loginedUser?.password
            
            if (passwordVerify) {
                console.log("login success");
                return loginedUser;
            } else {
                console.log("incorrect password");
                return LoginStatus.IncorrectPassword;
            }
        }
        console.log("user does not exist");
        return LoginStatus.UserNotFound;
    },
}

export default repository