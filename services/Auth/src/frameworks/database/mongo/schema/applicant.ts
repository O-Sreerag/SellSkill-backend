import mongoose, { Schema, Document, Model } from "mongoose";

const ProfileSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true }
});

const CareerSchema: Schema = new Schema({
  id: { type: String, required: true },
  status: { type: String, required: true },
});

interface ApplicantDoc extends Document {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  image?: string;
  phoneNo?: number;
  applications?: string[];
  events?: string;
  verified?: boolean;
  status: boolean;
  isGoogle: boolean;
  profile?: {
    fullName: string;
    age: string;
    gender: string;
    country: string;
    region: string;
  };
  careers?: {
    id: string;
    status: string;
  }[];
}

export const ApplicantSchema: Schema<ApplicantDoc> = new mongoose.Schema(
  {
    name: {
      type: String,
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
    image: {
      type: String,
    },
    applications: {
      type: [String],
    },
    events: {
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
    profile: {
      type: ProfileSchema,
    },
    careers: {
      type: [CareerSchema],
    }
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
