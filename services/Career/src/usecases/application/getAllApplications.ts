import { DependeniciesData } from "../../entities/interface";

export const Application_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicationRepository
    } = dependencies;

    console.log("Application get all use case");

    if (!applicationRepository) {
        console.log('The Application repository should exist in dependencies');
    }

    const execute = (id: string, forwho: string) => {
        console.log("id :", id )
        console.log("forwho :", forwho )
        if(forwho == "career") {
            return applicationRepository.getAll(id);
        } else {
            return applicationRepository.getAllForApplicant(id);
        }
    };

    return {
        execute
    };
};
