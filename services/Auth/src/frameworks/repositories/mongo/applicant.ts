import mongoose from 'mongoose';
import { ApplicantSchema } from '../../database/mongo/schema/applicant';
import { ApplicantData } from '../../../entities/applicant';
import bcrypt from "bcrypt";
import { VerifyUser } from '../../../entities/user';

// Schema
const entityName = "Applicant";
const Applicant = mongoose.model(entityName, ApplicantSchema)

const repository = {
    add: async (applicant: ApplicantData) => {
        console.log("creating applicant in db")
        const mongoObject = new Applicant(applicant);
        return mongoObject.save();
    },
    findById: async ( _id: any) => {
        // const applicant = await Applicant.findById(_id);
        // return applicant ? applicant : null;
        return Applicant.findById({ _id })
    },
    findByEmail: async ( email: any) => {
        return Applicant.findOne({ email })
    },
    login: async ({ email, password }: ApplicantData) => {
        const loginedUser: any = await Applicant.findOne({ email });
        
        if (loginedUser) {
            const passwordVerify = await bcrypt.compare(
                password,
                loginedUser?.password
            );
            
            if (passwordVerify) {
                if (loginedUser.verified) {
                    console.log(" login success");
                    return loginedUser;
                }
                console.log("notVerified");
                return "notverified";
            } else {
                console.log("incorrect password");
                return "password";
            }
        }
        console.log("user not exits");
        return "email";
    },
    verifyUser: async ({email, verifyToken}: VerifyUser) => {
        console.log("verifying User");
        console.log(email, verifyToken);
        
        const user = await Applicant.findOne({email});
        if (!user){
            return false;
        }
        else if (user.password == verifyToken) {
            await Applicant.findByIdAndUpdate(user._id, { $set: { verified: true } });
            return true;
        } else {
            return false;
        }
    }
}

export default repository
// update: async (applicant: { _id: any; }) => {
//     const {
//         _id
//     } = applicant;
//     delete applicant._id;
//     return Applicant.findByIdAndUpdate(_id, {
    //         ...applicant,
    //         updatedAt: new Date()
    //     }, {
        //         new: true
//     }).lean();
// },
// delete: async (applicant: { _id: any; }) => {
    //     const {
        //         _id
//     } = applicant;
//     delete applicant._id;
//     return Applicant.findByIdAndUpdate(_id, {
    //         deletedAt: new Date()
//     }, {
//         new: true
//     }).lean();
// },
// checkPassword: async ( _id: string, password: string) => {
    //     const applicant = await Applicant.findById(_id);
    //     if (applicant) {
        //         const status = await bcrypt.compare(password, applicant.password);
        //         return status;
        //     }
//     return false;
// },
// updatePasswordByEmail: async (email: string, newPass: string) => {
    //     const password = await bcrypt.hash(newPass, 10);
    //     const update = await Applicant.updateOne({ email }, { $set: { password } });
    //     return update;
    // },