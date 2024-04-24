import { DependeniciesData } from "../../entities/interface";

export const Application_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application get use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return applicationRepository.get(id);
    };

    return {
        execute
    };
};
