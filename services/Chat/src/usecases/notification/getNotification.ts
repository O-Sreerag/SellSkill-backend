import { DependeniciesData } from "../../entities/interface";

export const Notification_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        notificationRepository
    } = dependencies;

    console.log("Notification get use case");

    if (!notificationRepository) {
        console.log('The Notification repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return notificationRepository.get(id);
    };

    return {
        execute
    };
};
