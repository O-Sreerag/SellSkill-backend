import { DependeniciesData } from "../../entities/interface";

export const Application_Delete_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application delete use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return applicationRepository.delete(id);
    };

    return {
        execute
    };
};
