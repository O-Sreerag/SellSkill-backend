import { NotificationData } from "../../entities/notification";
import { DependeniciesData } from "../../entities/interface";

export const Notification_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;

    console.log("Notification update use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (id: string, notificationData: NotificationData) => {
        return notificationRepository.update(id, notificationData);
    };

    return {
        execute
    };
};
