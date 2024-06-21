import { DependeniciesData } from "../../entities/interface";

export const Applicant_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicant get use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return applicantRepository.get(id);
    };

    return {
        execute
    };
};
