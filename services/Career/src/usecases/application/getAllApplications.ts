import { DependeniciesData } from "../../entities/interface";

export const Application_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application get all use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (recruiterId: string) => {
        return applicationRepository.getAll(recruiterId);
    };

    return {
        execute
    };
};
