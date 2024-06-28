import mongoose, { Schema, Document, Model } from "mongoose";

// const ApplicantsSchema: Schema = new Schema({
//   id: { type: String, required: true },
//   status: { type: String, required: true },
// });

interface RecruiterDoc extends Document {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  phoneNo?: number;
  url?: string;
  jobRoles?: string[];
  profile?: string;
  verified?: boolean;
  status?: boolean;
  isGoogle: boolean;
  // applicants?: {
  //   id: string;
  //   status: string;
  // }[];
}

export const RecruiterSchema: Schema<RecruiterDoc> = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: ""
    },
    phoneNo: {
      type: Number,
    },
    url: {
      type: String,
    },
    jobRoles: {
      type: [String],
    },
    profile: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    status: {
      type: Boolean,
      default: false,
    },
    isGoogle: {
      type: Boolean,
      required: true,
    },
    // applicants: {
    //   type: [ApplicantsSchema],
    // }
  },
  // {
  //   toJSON: {
  //     transform(doc, ret) {
  //       ret.id = ret._id;
  //       delete ret._id;
  //     },
  //   },
  // }
);
