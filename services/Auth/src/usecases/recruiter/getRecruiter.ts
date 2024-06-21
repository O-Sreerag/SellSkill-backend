import { DependeniciesData } from "../../entities/interface";

export const Recruiter_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies;

    console.log("Recruiter get use case");

    if (!recruiterRepository) {
        console.log('The Recruiter repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return recruiterRepository.get(id);
    };

    return {
        execute
    };
};
