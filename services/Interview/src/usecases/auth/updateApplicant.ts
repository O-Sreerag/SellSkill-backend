import { ApplicantData } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicant update use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (id: string, applicant: ApplicantData) => {
        return applicantRepository.update(id, applicant);
    };

    return {
        execute
    };
};
