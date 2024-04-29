import { DependeniciesData } from "../../entities/interface";

export const Interview_Delete_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview delete use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return interviewRepository.delete(id);
    };

    return {
        execute
    };
};
