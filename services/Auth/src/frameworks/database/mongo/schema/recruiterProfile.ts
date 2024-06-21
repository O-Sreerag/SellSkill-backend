import mongoose, { Schema, Document, Model } from "mongoose";

interface RecruiterProfileDoc extends Document {
    _id?: string;
    companyName: string;
    industry: string;
    headquarters: string;
    ceo: string;
    founded: string;
    employees: string;
    revenue: string;
}

export const RecruiterProfileSchema: Schema<RecruiterProfileDoc> = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        headquarters: {
            type: String,
            required: true,
        },
        ceo: {
            type: String,
            required: true,
        },
        founded: {
            type: String,
            required: true,
        },
        employees: {
            type: String,
            required: true,
        },
        revenue: {
            type: String,
            required: true,
        },
    }
);
