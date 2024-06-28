import { RecruiterData } from "../../entities/recruiter";
import { DependeniciesData } from "../../entities/interface";

export const Recruiter_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies;

    console.log("Recruiter update use case");

    if (!recruiterRepository) {
        console.log('The Recruiter repository should exist in dependencies');
    }

    const execute = (id: string, recruiter: RecruiterData) => {
        return recruiterRepository.update(id, recruiter);
    };

    return {
        execute
    };
};
