import mongoose from 'mongoose';
import { ApplicantSchema } from '../../database/mongo/schema/applicant';
import { ApplicantData } from '../../../entities/applicant';
import { VerifyUser } from '../../../entities/common';

// Schema
const entityName = "Applicant";
const Applicant = mongoose.model(entityName, ApplicantSchema)

const repository = {
    add: async (applicant: ApplicantData) => {
        console.log("creating applicant in db")
        const mongoObject = new Applicant(applicant);
        return mongoObject.save();
    },
    get: async (id: string) => {
        console.log(`Fetching applicant with ID: ${id}`);
        return Applicant.findById(id);
    },
    update: async (id: string, applicant: ApplicantData) => {
        console.log(`Updating applicant with ID: ${id}`);
        return Applicant.findByIdAndUpdate(id, applicant, { new: true });
    },
    verifyUser: async ({email}: VerifyUser) => {
        console.log("verifying User");
        console.log(email);
        
        const user = await Applicant.findOne({ email });
        console.log(user)
        if (!user){
            return false;
        }
        else {
            await Applicant.findByIdAndUpdate(user._id, { $set: { verified: true } });
            return true;
        }
    }
}

export default repository