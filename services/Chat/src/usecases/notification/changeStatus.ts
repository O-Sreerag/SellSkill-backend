import { DependeniciesData } from "../../entities/interface";

export const Notification_ChangeStatus_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;

    console.log("Notification change status use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return notificationRepository.changeStatus(id);
    };

    return {
        execute
    };
};
