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
        console.log(`Updating applicant with ID: ${id}, ${applicant}`);
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
    },
    getById: async (id: string) => {
        console.log("get applicant from db repository function by id")
        const applicant = await Applicant.find({ _id: id });
        console.log("Found applicant:", applicant);
        return applicant;
    },
    getByEmail: async (email: string) => {
        console.log("get applicant from db repository function by email")
        const applicant = await Applicant.find({ email: email });
        console.log("Found applicant:", applicant);
        return applicant;
    },
    getApplicants: async(applicantIds: string[]) => {
        console.log(`Geting all applicants in career with Id: ${applicantIds}`);

        const objectIds = applicantIds.map(id => new mongoose.Types.ObjectId(id));
        const applicants = await Applicant.find({ _id: { $in: objectIds } });

        console.log("Found applicants:", applicants);
        return applicants;
    },
}

export default repository