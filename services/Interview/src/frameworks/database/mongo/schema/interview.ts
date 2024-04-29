import mongoose, { Schema, Document } from "mongoose";

interface InterviewDoc extends Document {
  _id?: string;
  recruiterId?: string;
  host?: string;
  team?: string;
  candidate_name?: string;
  candidate_id?: string;
  candidate_email?: string;
  date?: Date;
  time?: string;
  duration?: string;
}

export const InterviewSchema: Schema<InterviewDoc> = new mongoose.Schema(
  {
    recruiterId: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'recruiter'
    },
    host: {
      type: String,
    },
    team: {
      type: String,
    },
    candidate_name: {
      type: String,
    },
    candidate_id: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'applicant'
    },
    candidate_email: {
      type: String,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
    },
    duration: {
      type: String,
    },
  }
);