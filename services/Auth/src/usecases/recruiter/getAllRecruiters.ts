import { DependeniciesData } from "../../entities/interface";

export const Recruiter_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies;

    console.log("Recruiter get all use case");

    if (!recruiterRepository) {
        console.log('The Recruiter repository should exist in dependencies');
    }

    const execute = () => {
        return recruiterRepository.getAll();
    };

    return {
        execute
    };
};