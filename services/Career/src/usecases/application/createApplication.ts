import { ApplicationData, Application } from "../../entities/application";
import { DependeniciesData } from "../../entities/interface";

export const Application_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application add use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (applicationData: ApplicationData) => {
        const application = new Application(applicationData);
        return applicationRepository.create(application);
    };

    return {
        execute
    };
};
