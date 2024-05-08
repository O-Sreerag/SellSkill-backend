import mongoose, { Schema, Document, Model } from "mongoose";

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
