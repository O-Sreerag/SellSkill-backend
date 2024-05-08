import mongoose, { Schema, Document } from "mongoose";

interface CareerDoc extends Document {
  _id?: string;
  recruiterId?: string;

  posting_title?: string;
  industry?: string;
  location?: string;
  salary_min?: number;
  salary_max?: number;
  workExp_min?: number;
  workExp_max?: number;
  job_type?: string;
  opening_status?: string;
  date_opened?: Date;
  target_date?: Date;
  contact_name?: string;
  no_of_positions?: number;

  job_description?: string[];
  required_skills?: string[];
  responsibilities?: string[];
  benefits?: string[];

  applicants?: string[];
  url?: string;
}

export const CareerSchema: Schema<CareerDoc> = new mongoose.Schema(
  {
    recruiterId: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'recruiter'
    },
    posting_title: {
      type: String,
    },
    industry: {
      type: String,
    },
    location: {
      type: String,
    },
    salary_min: {
      type: Number,
    },
    salary_max: {
      type: Number,
    },
    workExp_min: {
      type: Number,
    },
    workExp_max: {
      type: Number,
    },
    job_type: {
      type: String,
    },
    opening_status: {
      type: String,
    },
    date_opened: {
      type: Date,
    },
    target_date: {
      type: Date,
    },
    contact_name: {
      type: String,
    },
    no_of_positions: {
      type: Number,
    },
    job_description: [{
      type: String,
    }],
    required_skills: [{
      type: String,
    }],
    responsibilities: [{
      type: String,
    }],
    benefits: [{
      type: String,
    }],
    applicants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'applicant',
    }],
    url: {
      type: String,
    },
  }
);