import { ApplicationData } from "../../entities/application";
import { DependeniciesData } from "../../entities/interface";

export const Application_ChangeStatus_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application change status use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (applicationId: string, status: string) => {
        return applicationRepository.changeStatus(applicationId, status);
    };

    return {
        execute
    };
};
