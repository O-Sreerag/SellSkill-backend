import mongoose, { Schema, Document } from "mongoose";

interface CareerDoc extends Document {
  _id?: string;
  salary?: number;
  requirements?: string[];
  required_skills?: string[];
  contact_name?: string;
  responsibilities?: string[];
  benefits?: string[];
  job_type?: string;
  opening_status?: boolean;
  industry?: string;
  work_exp?: number;
  date_opened?: Date;
  target_date?: Date;
  posting_title?: string;
  applicants?: string[];
  url?: string;
}

export const CareerSchema: Schema<CareerDoc> = new mongoose.Schema(
  {
    salary: {
      type: Number,
    },
    requirements: [{
      type: String,
    }],
    required_skills: [{
      type: String,
    }],
    contact_name: {
      type: String,
    },
    responsibilities: [{
      type: String,
    }],
    benefits: [{
      type: String,
    }],
    job_type: {
      type: String,
    },
    opening_status: {
      type: Boolean,
    },
    industry: {
      type: String,
    },
    work_exp: {
      type: Number,
    },
    date_opened: {
      type: Date,
    },
    target_date: {
      type: Date,
    },
    posting_title: {
      type: String,
    },
    applicants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Applicant', // Assuming you have Applicant model defined
    }],
    url: {
      type: String,
    },
  }
);