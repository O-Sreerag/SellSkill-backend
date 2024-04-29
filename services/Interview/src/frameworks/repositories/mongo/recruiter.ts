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