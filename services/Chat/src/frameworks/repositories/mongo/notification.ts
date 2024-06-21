import mongoose from 'mongoose';
import { NotificationSchema } from '../../database/mongo/schema/notification';
import { NotificationData, NotificationType } from '../../../entities/notification';

// Schema
const entityName = "Notification";
const Notification = mongoose.model(entityName, NotificationSchema);

const notificationRepository = {
    create: async (notificationData: NotificationData) => {
        console.log('Creating notification in database');
        const notification = new Notification(notificationData);
        return notification.save();
    },
    update: async (id: string, notificationData: Partial<NotificationData>) => {
        console.log(`Updating notification with ID: ${id}`);
        return Notification.findByIdAndUpdate(id, notificationData, { new: true });
    },
    delete: async (id: string) => {
        console.log(`Deleting notification with ID: ${id}`);
        return Notification.findByIdAndDelete(id);
    },
    get: async (id: string) => {
        console.log(`Fetching notification with ID: ${id}`);
        return Notification.findById(id);
    },
    getAll: async (userId: string) => {
        console.log(`Fetching all notifications for userId: ${userId}`);
        return Notification.find({ userId });
    },
    changeStatus: async (id: string) => {
        console.log(`Changing status of notification to read: ${id}`);
        return Notification.findByIdAndUpdate(id, { read: true }, { new: true });
    },
};

export default notificationRepository;
