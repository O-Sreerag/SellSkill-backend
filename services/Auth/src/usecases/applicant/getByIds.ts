import { DependeniciesData } from "../../entities/interface";

export const Applicant_GetByIds_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicant get by ids use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (ids: string[]) => {
        return applicantRepository.getApplicantsByIds(ids);
    };

    return {
        execute
    };
};
