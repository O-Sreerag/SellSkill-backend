import { ApplicationData } from "../../entities/application";
import { DependeniciesData } from "../../entities/interface";

export const Application_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application update use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (id: string, applicationData: ApplicationData) => {
        return applicationRepository.update(id, applicationData);
    };

    return {
        execute
    };
};
