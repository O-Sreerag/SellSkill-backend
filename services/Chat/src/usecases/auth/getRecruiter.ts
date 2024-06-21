import { DependeniciesData } from "../../entities/interface";
import { getByDetails } from "../../entities/common";

export const Recruiter_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        recruiterRepository
    } = dependencies;

    console.log("Recruiter get use case");

    if (!recruiterRepository) {
        console.log('The Recruiter repository should exist in dependencies');
        return {
            execute: async () => Promise.reject('The Recruiter repository is not defined in dependencies')
        };
    }

    const execute = async (obj: getByDetails): Promise<any> => {
        const id = obj.id
        const email = obj.email
        try {
            if (id) {
                const recruiter = await recruiterRepository.getById(id);
                if (!recruiter) {
                    console.log(`No applicant found with ID: ${id}`);
                    return Promise.resolve(null);
                }
                return recruiter;
            } else if (email) {
                const recruiter = await recruiterRepository.getByEmail(email);
                if (!recruiter) {
                    console.log(`No applicant found with email: ${email}`);
                    return Promise.resolve(null);
                }
                return recruiter;
            } else {
                console.log('Either id or email must be provided');
                return Promise.resolve(null);
            }
        } catch (error) {
            console.log('Error occurred while fetching recruiter:', error);
            return Promise.reject(error);
        }
    };

    return {
        execute
    };
};
