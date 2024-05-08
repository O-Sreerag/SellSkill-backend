import mongoose, { Schema, Document } from "mongoose";

interface InterviewDoc extends Document {
  _id?: string;
  recruiterId?: string;
  candidate_id?: string;
  host?: string;
  team?: string[];
  candidate_email?: string;
  candidates_emails?: string[];
  eventType?: string;
  eventName?: string;
  date?: Date;
  time?: string;
  duration?: string;
  comformedEmails?: string[];
}

export const InterviewSchema: Schema<InterviewDoc> = new mongoose.Schema(
  {
    recruiterId: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'recruiter'
    },
    candidate_id: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'applicant'
    },
    host: {
      type: String,
    },
    team: [{
      type: String,
    }],
    candidate_email: {
      type: String,
    },
    candidates_emails: [{
      type: String,
    }],
    eventName: {
      type: String,
    },
    eventType: {
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
    comformedEmails: [{
      type: String,
    }],
  }
);