import { DependeniciesData } from "../../entities/interface";

export const Career_GetApplicants_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicants from career get use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (applicantIds: string[]) => {
        return applicantRepository.getApplicants(applicantIds);
    };

    return {
        execute
    };
};
