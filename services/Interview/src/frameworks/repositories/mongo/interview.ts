import mongoose from 'mongoose';
import { InterviewSchema } from '../../database/mongo/schema/interview';
import { InterviewData } from '../../../entities/interview';
import { ComformForInterview } from '../../../entities/common';

// Schema
const entityName = "Interview";
const Interview = mongoose.model(entityName, InterviewSchema);

const interviewRepository = {
    create: async (interviewData: InterviewData) => {
        console.log("Creating interview in database");
        const interview = new Interview(interviewData);
        return interview.save();
    },
    update: async (id: string, interviewData: InterviewData) => {
        console.log(`Updating interview with ID: ${id}`);
        return Interview.findByIdAndUpdate(id, interviewData, { new: true });
    },
    delete: async (id: string) => {
        console.log(`Deleting interview with ID: ${id}`);
        return Interview.findByIdAndDelete(id);
    },
    get: async (id: string) => {
        console.log(`Fetching interview with ID: ${id}`);
        return Interview.findById(id);
    },
    getAll: async (recruiterId: string) => {
        console.log("Fetching all interviews");
        return Interview.find({recruiterId});
    },
    getAllFromEmail: async (email: string) => {
        console.log("Fetching all interviews");
        const query = {
            $or: [
                { host: email },
                { candidate_email: email },
                { team: email },
                { candidates_emails: email }
            ]
        };
    
        return Interview.find(query);
    },
    comformForInterview: async ({ email, interviewId, job_type, role, }: ComformForInterview) => {
        console.log("Comform for interview repository function");
        console.log(email, interviewId, job_type, role)
        
        const interview = await Interview.findOne({ _id: interviewId });
        console.log(interview)
        if (!interview){
            return false;
        } else {
            await Interview.findByIdAndUpdate(interview._id, { $push: { comformedEmails: email } });
            return true;
        }
    }
    
};

export default interviewRepository;