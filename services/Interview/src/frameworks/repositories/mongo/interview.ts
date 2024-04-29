import mongoose from 'mongoose';
import { InterviewSchema } from '../../database/mongo/schema/interview';
import { InterviewData } from '../../../entities/interview';

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
    }
};

export default interviewRepository;
