import mongoose, { Schema, Document } from "mongoose";

// Define an interface for the message subdocument
interface IMessage {
  message: string;
  time: Date;
  status: string;
  from: {
    name: string;
    id: string;
    role: string;
  };
  to: {
    name: string;
    id: string;
    role: string;
  };
}

// Define an interface for the Room document
interface IRoom extends Document {
  user1Id: string;
  user2Id: string;
  user1_name: string;
  user2_name: string;
  last_online: Date;
  chat: IMessage[];
}

// Define the message schema
const MessageSchema: Schema = new Schema({
  message: { type: String, required: true },
  time: { type: Date, default: Date.now },
  status: { type: String, required: true }, // e.g., 'sent', 'delivered', 'read'
  from: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    role: { type: String, required: true }
  },
  to: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    role: { type: String, required: true }
  },
});

// Define the room schema
export const RoomSchema: Schema<IRoom> = new Schema(
  {
    user1Id: { type: String, required: true },
    user2Id: { type: String, required: true },
    user1_name: { type: String, required: true },
    user2_name: { type: String, required: true },
    last_online: { type: Date, default: Date.now },
    chat: [MessageSchema],
  },
  {
    timestamps: true,
  }
);
