import { DependeniciesData } from "../../entities/interface";
import { getByDetails } from "../../entities/common";

export const Applicant_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        applicantRepository
    } = dependencies;

    console.log("Applicant get use case");

    if (!applicantRepository) {
        console.log('The Applicant repository should exist in dependencies');
        return {
            execute: async () => Promise.reject('The Applicant repository is not defined in dependencies')
        };
    }

    const execute = async (obj: getByDetails): Promise<any> => {
        const id = obj.id
        const email = obj.email
        try {
            if (id) {
                const applicant = await applicantRepository.getById(id);
                if (!applicant) {
                    console.log(`No applicant found with ID: ${id}`);
                    return Promise.resolve(null);
                }
                return applicant;
            } else if (email) {
                const applicant = await applicantRepository.getByEmail(email);
                if (!applicant) {
                    console.log(`No applicant found with email: ${email}`);
                    return Promise.resolve(null);
                }
                return applicant;
            } else {
                console.log('Either id or email must be provided');
                return Promise.resolve(null);
            }
        } catch (error) {
            console.log('Error occurred while fetching applicant:', error);
            return Promise.reject(error);
        }
    };

    return {
        execute
    };
};
