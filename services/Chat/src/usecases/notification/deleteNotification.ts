import { DependeniciesData } from "../../entities/interface";

export const Notification_Delete_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;

    console.log("Notification delete use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return notificationRepository.delete(id);
    };

    return {
        execute
    };
};
