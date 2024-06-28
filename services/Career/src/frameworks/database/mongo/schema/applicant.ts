import mongoose, { Schema, Document, Model } from "mongoose";

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
  applications?: string;
  events?: string;
  verified?: boolean;
  status?: boolean;
  isGoogle: boolean;
  careers?: {
    id: string;
    status: string;
  }[];
}

export const ApplicantSchema: Schema<ApplicantDoc> = new mongoose.Schema(
  { 
    _id: {
        type: String,
        required: true
    },
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
        type: String,
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
    careers: {
      type: [CareerSchema],
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
