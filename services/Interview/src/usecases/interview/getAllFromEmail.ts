import { DependeniciesData } from "../../entities/interface";

export const Interview_GetAllFromEmail_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview get all from email use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (email: string) => {
        return interviewRepository.getAllFromEmail(email);
    };

    return {
        execute
    };
};
