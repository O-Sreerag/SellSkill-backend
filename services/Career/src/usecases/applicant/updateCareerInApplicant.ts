import { ApplicantData, Applicant } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_updateCareerStatus_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Updating career on applicant usecase");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (applicantId: string, careerId: string, status: string) => {
        return applicantRepository.updateCareerStatus(applicantId, careerId, status);
    };

    return {
        execute
    };
};
