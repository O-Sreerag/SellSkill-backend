import { DependeniciesData } from "../../entities/interface";

export const Recruiter_GetProfile_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies;

    console.log("Recruiter get profile use case");

    if (!recruiterRepository) {
        console.log('The Recruiter repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return recruiterRepository.getProfile(id);
    };

    return {
        execute
    };
};
