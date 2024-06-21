import mongoose from 'mongoose';
import { ApplicationSchema } from '../../database/mongo/schema/application';
import { ApplicationData } from '../../../entities/application';

// Schema
const entityName = "Application";
const Application = mongoose.model(entityName, ApplicationSchema);

const applicationRepository = {
    create: async (applicationData: ApplicationData) => {
        console.log("Creating application in database");
        const application = new Application(applicationData);
        return application.save();
    },
    update: async (id: string, applicationData: ApplicationData) => {
        console.log(`Updating application with ID: ${id}`);
        return Application.findByIdAndUpdate(id, applicationData, { new: true });
    },
    delete: async (id: string) => {
        console.log(`Deleting application with ID: ${id}`);
        return Application.findByIdAndDelete(id);
    },
    get: async (id: string) => {
        console.log(`Fetching application with ID: ${id}`);
        return Application.findById(id);
    },
    getAll: async (id: string) => {
        console.log("Fetching all applications");
        return Application.find({id});
    },
    getAllForApplicant: async (id: string) => {
        console.log("Fetching all applications");
        return Application.find({ applicantId: id });
    },
    changeStatus: async (applicationId: string, status: string) => {
        console.log("Fetching all applications");
        return Application.findByIdAndUpdate(applicationId, { status: status }, { new: true });
    },
};

export default applicationRepository;