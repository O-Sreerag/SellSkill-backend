import mongoose, { Schema, Document, Model } from "mongoose";

interface ApplicantProfileDoc extends Document {
    _id?: string;
    fullName: string;
    age: string;
    gender: string;
    country: string;
    region: string;
}

export const ApplicantProfileSchema: Schema<ApplicantProfileDoc> = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        },
    }
);
