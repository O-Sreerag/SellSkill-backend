import mongoose from 'mongoose';
import { RecruiterSchema } from '../../database/mongo/schema/recruiter';
import { RecruiterData } from '../../../entities/recruiter';
import bcrypt from "bcrypt";
import { VerifyUser } from '../../../entities/user';

// Schema
const entityName = "Recruiter";
const Recruiter = mongoose.model(entityName, RecruiterSchema)

const repository = {
    add: async (recruiter: RecruiterData) => {
        console.log("creating recruiter in db repository function")
        const mongoObject = new Recruiter(recruiter);
        return mongoObject.save();
    },
    login: async ({ email, password }: RecruiterData) => {
        console.log("recruiter login repository function")
        const loginedUser: any = await Recruiter.findOne({ email });
        console.log(loginedUser)
    
        if (loginedUser) {
            const passwordVerify = await bcrypt.compare(
                password,
                loginedUser?.password
            );
        
            if (passwordVerify) {
                if (loginedUser.verified) {
                    console.log("login success");
                    return loginedUser;
                }
                console.log("notVerified");
                return "notverified";
            } else {
                console.log("incorrect password");
                return "password";
            }
        }
        console.log("user does not exits");
        return "email";
    },
    verifyUser: async ({ email, verifyToken}: VerifyUser) => {
        console.log("verifying User repository function");
        console.log(email, verifyToken);
        
        const user = await Recruiter.findOne({ email: email });
        console.log(user)
        if (!user){
            return false;
        } else if (user.password == verifyToken) {
            await Recruiter.findByIdAndUpdate(user._id, { $set: { verified: true } });
            return true;
        } else {
            return false;
        }
    }
}

export default repository

// update: async (recruiter: { _id: any; }) => {
    //     const {
        //         _id
        //     } = recruiter;
        //     delete recruiter._id;
        //     return Recruiter.findByIdAndUpdate(_id, {
            //         ...recruiter,
            //         updatedAt: new Date()
            //     }, {
        //         new: true
        //     }).lean();
        // },
        // delete: async (recruiter: { _id: any; }) => {
            //     const {
                //         _id
                //     } = recruiter;
                //     delete recruiter._id;
                //     return Recruiter.findByIdAndUpdate(_id, {
                    //         deletedAt: new Date()
                    //     }, {
                        //         new: true
                        //     }).lean();
        // },
        // checkPassword: async ( _id: string, password: string) => {
        //     const recruiter = await Recruiter.findById(_id);
        //     if (recruiter) {
        //         const status = await bcrypt.compare(password, recruiter.password);
        //         return status;
        //     }
        //     return false;
        // },
        // updatePasswordByEmail: async (email: string, newPass: string) => {
        //     const password = await bcrypt.hash(newPass, 10);
        //     const update = await Recruiter.updateOne({ email }, { $set: { password } });
        //     return update;
        // },