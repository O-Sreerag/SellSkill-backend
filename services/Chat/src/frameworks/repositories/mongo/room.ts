import mongoose from 'mongoose';
import { RoomSchema } from '../../database/mongo/schema/room';
import { MessageData, RoomData } from '../../../entities/room';

// Schema
const entityName = "Room";
const Room = mongoose.model(entityName, RoomSchema);

const roomRepository = {
    create: async (roomData: RoomData) => {
        console.log("Creating room in database");
        const room = new Room(roomData);
        return room.save();
    },
    update: async (id: string, roomData: RoomData) => {
        console.log(`Updating room with ID: ${id}`);
        return Room.findByIdAndUpdate(id, roomData, { new: true });
    },
    delete: async (id: string) => {
        console.log(`Deleting room with ID: ${id}`);
        return Room.findByIdAndDelete(id);
    },
    get: async (id: string) => {
        console.log(`Fetching room with ID: ${id}`);
        return Room.findById(id);
    },
    getAll: async (userId: string) => {
        console.log("Fetching all rooms for userId:", userId);
        return Room.find({
            $or: [{ user1Id: userId }, { user2Id: userId }]
        });
    },
    createMessage: async (id: string, messageData: MessageData) => {
        console.log(`Adding message to room with ID: ${id}`);
        return Room.findByIdAndUpdate(id, { $push: { chat: messageData } }, { new: true });
    }
};

export default roomRepository;
