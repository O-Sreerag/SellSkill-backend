// Notification_Create_Usecase

import { NotificationData, Notification } from "../../entities/notification";
import { DependeniciesData } from "../../entities/interface";

export const Notification_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;
    console.log("Notification add use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (notificationData: NotificationData) => {
        const notification = new Notification(notificationData);
        return notificationRepository.create(notification);
    };
    return {
        execute
    };
};
