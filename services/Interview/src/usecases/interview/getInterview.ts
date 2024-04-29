import { DependeniciesData } from "../../entities/interface";

export const Interview_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview get use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return interviewRepository.get(id);
    };

    return {
        execute
    };
};
