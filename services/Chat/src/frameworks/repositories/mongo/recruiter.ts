import mongoose from 'mongoose';
import { RecruiterSchema } from '../../database/mongo/schema/recruiter';
import { RecruiterData } from '../../../entities/recruiter';
import { VerifyUser } from '../../../entities/common';

// Schema
const entityName = "Recruiter";
const Recruiter = mongoose.model(entityName, RecruiterSchema)

const repository = {
    add: async (recruiter: RecruiterData) => {
        console.log("creating recruiter in db repository function")
        const mongoObject = new Recruiter(recruiter);
        return mongoObject.save();
    },
    get: async (id: string) => {
        console.log(`Fetching recruiter with ID: ${id}`);
        return Recruiter.findById(id);
    },
    getById: async (id: string) => {
        console.log("get recruiter from db repository function by id")
        const recruiter = await Recruiter.find({ _id: id });
        console.log("Found recruiter:", recruiter);
        return recruiter;
    },
    getByEmail: async (email: string) => {
        console.log("get recruiter from db repository function by email")
        const recruiter = await Recruiter.find({ email: email });
        console.log("Found recruiter:", recruiter);
        return recruiter;
    },
    verifyUser: async ({ email}: VerifyUser) => {
        console.log("verifying User repository function");
        console.log(email);
        
        const user = await Recruiter.findOne({ email: email });
        console.log(user)
        if (!user){
            return false;
        } else {
            await Recruiter.findByIdAndUpdate(user._id, { $set: { verified: true } });
            return true;
        }
    }
}

export default repository