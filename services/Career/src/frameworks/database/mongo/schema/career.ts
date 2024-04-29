import mongoose, { Schema, Document } from "mongoose";

interface CareerDoc extends Document {
  _id?: string;
  recruiterId?: string;

  posting_title?: string;
  salary?: number;
  contact_name?: string;
  job_type?: string;
  opening_status?: string;
  industry?: string;
  work_exp?: number;
  date_opened?: Date;
  target_date?: Date;
  revenue_per_person?: number; 
  no_of_positions?: number;

  // required_skills?: string[];
  // requirements?: string[];
  // responsibilities?: string[];
  // benefits?: string[];
  required_skills?: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;

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
    salary: {
      type: Number,
    },
    contact_name: {
      type: String,
    },
    job_type: {
      type: String,
    },
    opening_status: {
      type: String,
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
    revenue_per_person: {
      type: Number,
    },
    no_of_positions: {
      type: Number,
    },
    // required_skills: [{
    //   type: String,
    // }],
    // requirements: [{
    //   type: String,
    // }],
    // responsibilities: [{
    //   type: String,
    // }],
    // benefits: [{
    //   type: String,
    // }],
    required_skills: {
      type: String,
    },
    requirements: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    benefits: {
      type: String,
    },
    applicants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'applicant',
    }],
    url: {
      type: String,
    },
  }
);