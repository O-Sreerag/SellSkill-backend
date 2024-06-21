import mongoose, { Schema, Document, Model } from "mongoose";

const ProfileSchema: Schema = new Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  headquarters: { type: String, required: true },
  ceo: { type: String, required: true },
  founded: { type: String, required: true },
  employees: { type: String, required: true },
  revenue: { type: String, required: true },
});

interface RecruiterDoc extends Document {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  phoneNo?: number;
  url?: string;
  jobRoles?: string[];
  profile?: {
    companyName: string;
    industry: string;
    headquarters: string;
    ceo: string;
    founded: string;
    employees: string;
    revenue: string;
  };
  verified?: boolean;
  status: boolean;
  isGoogle: boolean;
}

export const RecruiterSchema: Schema<RecruiterDoc> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
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
      type: ProfileSchema,
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
