import mongoose, { Schema, Document } from "mongoose";

interface ApplicationDoc extends Document {
    _id?: string;
    applicantId?: string;
    careerId?:string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_no?: string;
    dob?: Date;
    gender?: string;
    current_location?: string;
    current_employer?: string;
    current_ctc?: number;
    experience?: number;
    grad_year?: Date;
    notice_period?: number;
    expected_ctc?: number;
    address?: string;
    skill_set?: string[];
    qualifications?: string[];
    resume?: string;
    status?: string;
}

export const ApplicationSchema: Schema<ApplicationDoc> = new mongoose.Schema(
    {
        applicantId: {
            type: String,
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'applicant'
        },
        careerId: {
            type: String,
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'career'
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone_no: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
            required: true,
        },
        current_location: {
            type: String,
            required: true,
        },
        current_employer: {
            type: String,
            required: true,
        },
        current_ctc: {
            type: Number,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        grad_year: {
            type: Date,
            required: true,
        },
        notice_period: {
            type: Number,
            required: true,
        },
        expected_ctc: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        skill_set: {
            type: [String],
            required: true,
        },
        qualifications: {
            type: [String],
            required: true,
        },
        resume: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "normal"
        }
    }
);
