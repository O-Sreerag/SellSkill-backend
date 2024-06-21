import mongoose from 'mongoose';
import { CareerSchema } from '../../database/mongo/schema/career';
import { CareerData } from '../../../entities/career';

// Schema
const entityName = "Career";
const Career = mongoose.model(entityName, CareerSchema);

const generateCareerURL = (postingTitle: string, id: string): string => {
    const jobTitleParam = encodeURIComponent(postingTitle);
    const idParam = encodeURIComponent(id);
    return `http://localhost:5173/home?pos=${jobTitleParam}&id=${idParam}`;
};

const careerRepository = {
    create: async (careerData: CareerData) => {
        console.log("Creating career in database");
        const posting_title = careerData.posting_title || '';
        const career = new Career(careerData);
        const url = generateCareerURL(posting_title, career._id);
        career.url = url;
        return career.save();
    },
    update: async (id: string, careerData: CareerData) => {
        console.log(`Updating career with ID: ${id}`);
        return Career.findByIdAndUpdate(id, careerData, { new: true });
    },
    delete: async (id: string) => {
        console.log(`Deleting career with ID: ${id}`);
        return Career.findByIdAndDelete(id);
    },
    get: async (id: string) => {
        console.log(`Fetching career with ID: ${id}`);
        return Career.findById(id);
    },
    getAll: async (recruiterId: string) => {
        console.log("Fetching all careers");
        return Career.find({ recruiterId });
    },
    getAllForApplicant: async (careerIds: string[]) => {
        console.log("Fetching all careers for applicant");
        return Career.find({ _id: { $in: careerIds } });
    }
};

export default careerRepository;
