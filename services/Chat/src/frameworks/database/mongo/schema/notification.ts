import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the Notification document
interface INotification extends Document {
    type: string;
    userId?: string;
    role?: string;
    message: string;
    createdAt: Date;
    read?: boolean;
    careerId?: string;
    interviewId?: string;
}

// Define the notification schema
export const NotificationSchema: Schema<INotification> = new Schema({
    type: { type: String, required: true },
    userId: { type: String },
    role: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
    careerId: { type: String },
    interviewId: { type: String },
});
