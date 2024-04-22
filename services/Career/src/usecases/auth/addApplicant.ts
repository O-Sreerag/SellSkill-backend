import { ApplicantData, Applicant } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_Signup_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies

    console.log("applicant signup usecase")

    if(!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies')
    }

    const execute = ({
        _id,
        // name,
        email,
        password,
        // image,
        // phoneNo,
        // applications,
        // events,
        verified,
        status,
        isGoogle,
    }: ApplicantData) => {
        const applicant = new Applicant({       
            _id,
            // name,
            email,
            password,
            // image,
            // phoneNo,
            // applications,
            // events,
            verified,
            status,
            isGoogle,
        })
        return applicantRepository.add(applicant)
    }
    return {
        execute
    }
}