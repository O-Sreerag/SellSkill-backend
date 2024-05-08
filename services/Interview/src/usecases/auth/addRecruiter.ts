import { RecruiterData, Recruiter } from "../../entities/recruiter";
import { DependeniciesData } from "../../entities/interface";

export const Recruiter_Signup_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies

    console.log("recruiter signup usecase")

    if(!recruiterRepository) {
        console.log('The recruiter repository should exist in dependencies')
    }

    const execute = ({
        _id,
        name,
        email,
        password,
        // phoneNo,
        url,
        // jobRoles,
        // profile,
        verified,
        status,
        isGoogle,
    }: RecruiterData) => {
        const recruiter = new Recruiter({       
            _id,
            name,
            email,
            password,
            // phoneNo,
            url,
            // jobRoles,
            // profile,
            verified,
            status,
            isGoogle,
        })

        return recruiterRepository.add(recruiter)
    }
    return {
        execute
    }
}