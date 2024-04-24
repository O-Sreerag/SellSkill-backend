import mongoose from 'mongoose';
import { CareerSchema } from '../../database/mongo/schema/career';
import { CareerData } from '../../../entities/career';

// Schema
const entityName = "Career";
const Career = mongoose.model(entityName, CareerSchema);

const careerRepository = {
    create: async (careerData: CareerData) => {
        console.log("Creating career in database");
        const career = new Career(careerData);
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
        return Career.find({recruiterId});
    }
};

export default careerRepository;
