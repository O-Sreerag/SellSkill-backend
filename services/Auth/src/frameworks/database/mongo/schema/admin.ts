import mongoose, { Schema, Document, Model } from "mongoose";

interface AdminDoc extends Document {
  _id?: string;
  email: string;
  password: string;
}

export const AdminSchema: Schema<AdminDoc> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: ""
    },
  },
);
