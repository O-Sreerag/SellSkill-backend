import { DependeniciesData } from "../../entities/interface";

export const Notification_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;

    console.log("Notification get all use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (userId: string) => {
        return notificationRepository.getAll(userId);
    };

    return {
        execute
    };
};
