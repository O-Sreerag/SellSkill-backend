import { DependeniciesData } from "../../entities/interface";

export const Applicant_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicant get all use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = () => {
        return applicantRepository.getAll();
    };

    return {
        execute
    };
};
