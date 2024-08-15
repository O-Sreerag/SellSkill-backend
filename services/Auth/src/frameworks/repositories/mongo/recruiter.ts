import mongoose from 'mongoose';
import { RecruiterSchema } from '../../database/mongo/schema/recruiter';
import { RecruiterData } from '../../../entities/recruiter';
import bcrypt from "bcrypt";
import { VerifyUser } from '../../../entities/user';
import { LoginStatus } from '../../../entities/interface';

// Schema
const entityName = "Recruiter";
const Recruiter = mongoose.model(entityName, RecruiterSchema)

const generateRecruiterUrl = (id: string): string => {
    const idParam = encodeURIComponent(id);
    return `http://sell-skill-frontend.vercel.app/applicant/career?recruiterId=${idParam}`;
};

const repository = {
    add: async (recruiter: RecruiterData) => {
        console.log("creating recruiter in db repository function")
        const mongoObject = new Recruiter(recruiter);
        const url = generateRecruiterUrl(mongoObject._id);
        mongoObject.url = url;
        return mongoObject.save();
    },
    update: async (id: string, recruiter: RecruiterData) => {
        console.log(`Updating recruiter with ID: ${id}`);
        return Recruiter.findByIdAndUpdate(id, recruiter, { new: true });
    },
    get: async (id: string) => {
        console.log(`Fetching recruiter with ID: ${id}`);
        return Recruiter.findById(id);
    },
    getProfile: async (id: string) => {
        console.log(`Fetching recruiter profile with ID: ${id}`);
        const recruiter = await Recruiter.findById(id);
        return recruiter?.profile
    },
    login: async ({ email, password }: RecruiterData): Promise<RecruiterData | LoginStatus> => {
        console.log("recruiter login repository function")
        const loginedUser: any = await Recruiter.findOne({ email });
        console.log(loginedUser);
        
        if (loginedUser) {
            const passwordVerify = await bcrypt.compare(password, loginedUser?.password);
            
            if (passwordVerify) {
                if (loginedUser.verified) {
                    console.log("login success");
                    return loginedUser;
                }
                console.log("notVerified");
                return LoginStatus.NotVerified;
            } else {
                console.log("incorrect password");
                return LoginStatus.IncorrectPassword;
            }
        }
        console.log("user does not exist");
        return LoginStatus.UserNotFound;
    },
    verifyUser: async ({ email}: VerifyUser) => {
        console.log("verifying User repository function");
        console.log(email);
        
        const user = await Recruiter.findOne({ email: email });
        console.log(user)
        if (!user){
            return false;
        } else {
            await Recruiter.findByIdAndUpdate(user._id, { $set: { verified: true } }, { new: true });
            return true;
        }
    },
    getAll: async () => {
        console.log("Fetching all recruiters");
        return Recruiter.find({});
    },
    block: async (id: string) => {
        console.log("Block recruiter repository");
        const user = await Recruiter.findOne({ _id: id});
        const status = user?.status
        return await Recruiter.findByIdAndUpdate(id, { $set: { status: !status }}, { new: true });
    },
    checkBlock:  async (id: string) => {
        console.log("check Block status recruiter repository");
        const user = await Recruiter.findOne({ _id: id});
        const status = user?.status
        return status
    },
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