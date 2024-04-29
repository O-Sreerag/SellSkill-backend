import { DependeniciesData } from "../../entities/interface";

export const Interview_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview get all use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (recruiterId: string) => {
        return interviewRepository.getAll(recruiterId);
    };

    return {
        execute
    };
};
