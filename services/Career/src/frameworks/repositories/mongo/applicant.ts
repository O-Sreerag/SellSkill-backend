import mongoose from 'mongoose';
import { ApplicantSchema } from '../../database/mongo/schema/applicant';
import { ApplicantData } from '../../../entities/applicant';
import { VerifyUser } from '../../../entities/common';
import { CareerSchema } from '../../database/mongo/schema/career';

// Schema
const entityName = "Applicant";
const Applicant = mongoose.model(entityName, ApplicantSchema)
const Career = mongoose.model("career", CareerSchema)

const repository = {
    add: async (applicant: ApplicantData) => {
        console.log("creating applicant in db")
        const mongoObject = new Applicant(applicant);
        return mongoObject.save();
    },
    update: async (id: string, applicant: ApplicantData) => {
        console.log(`Updating applicant with ID: ${id}`);
        return Applicant.findByIdAndUpdate(id, applicant, { new: true });
    },
    verifyUser: async ({ email }: VerifyUser) => {
        console.log("verifying User");
        console.log(email);

        const user = await Applicant.findOne({ email });
        console.log(user)
        if (!user) {
            return false;
        }
        else {
            await Applicant.findByIdAndUpdate(user._id, { $set: { verified: true } });
            return true;
        }
    },
    getApplicants: async (applicantIds: string[]) => {
        console.log(`Geting all applicants in career with Id: ${applicantIds}`);

        const objectIds = applicantIds.map(id => new mongoose.Types.ObjectId(id));
        const applicants = await Applicant.find({ _id: { $in: objectIds } });

        console.log("Found applicants:", applicants);
        return applicants;
    },
    addCareer: async (applicantId: string, careerId: string) => {
        console.log(`Adding career to applicant`);
        const applicant = await Applicant.findById(applicantId);

        if (!applicant) {
            return null
        }
        if (applicant.careers) {
            const careerExists = applicant.careers.some(career => career.id.toString() === careerId.toString());
            if (!careerExists) {
                applicant.careers.push({ id: careerId, status: "default" });
            }
        } else {
            applicant.careers = [{ id: careerId, status: "default" }];
        }

        const career = await Career.findById(careerId);
        return applicant.save();
    },
    get: async (id: string) => {
        console.log(`Fetching applicant with ID: ${id}`);
        return Applicant.findById(id);
    },
    updateCareerStatus: async (applicantId: string, careerId: string, status: string) => {
        console.log(`Adding career to applicant`);
        return Applicant.findByIdAndUpdate(
            { _id: applicantId, "careers.id": careerId },
            { $set: { "careers.$.status": status } },
            { new: true });
    },
}

export default repository

// if (applicant && applicant.careers) {
//     let careerExists = false;
//     for (let i = 0; i < applicant.careers.length; i++) {
//         if (applicant.careers[i].id === careerId) {
//             careerExists = true;
//             break;
//         }
//     }
//     if (!careerExists) {
//         applicant.careers.push({ id: careerId, status: "default" });
//     }
// } else {
//     applicant.careers = [{ id: careerId, status: "default" }];
// }