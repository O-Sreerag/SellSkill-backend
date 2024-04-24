import mongoose, { Schema, Document } from "mongoose";

interface ApplicationDoc extends Document {
    _id?: string;
    qualification: string[];
    contact: number;
    email: string;
    name: string;
    preferred_location: string;
    resume: string;
    skill_set: string[];
    notice_period: number;
    experience: string;
    expected_ctc: number;
    current_ctc: number;
    current_location: string;
    grad_year: Date;
    gender: string;
    current_employer: string;
    dob: Date;
}

export const ApplicationSchema: Schema<ApplicationDoc> = new mongoose.Schema(
    {
        qualification: {
            type: [String],
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        preferred_location: {
            type: String,
            required: true,
        },
        resume: {
            type: String,
            required: true,
        },
        skill_set: {
            type: [String],
            required: true,
        },
        notice_period: {
            type: Number,
            required: true,
        },
        experience: {
            type: String,
            required: true,
        },
        expected_ctc: {
            type: Number,
            required: true,
        },
        current_ctc: {
            type: Number,
            required: true,
        },
        current_location: {
            type: String,
            required: true,
        },
        grad_year: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        current_employer: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
    }
);
