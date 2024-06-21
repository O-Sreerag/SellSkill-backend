import { ApplicantData, Applicant } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_AddCareer_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Adding career on applicant usecase");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
    }

    const execute = (applicantId: string, careerId: string) => {
        return applicantRepository.addCareer(applicantId, careerId);
    };

    return {
        execute
    };
};
