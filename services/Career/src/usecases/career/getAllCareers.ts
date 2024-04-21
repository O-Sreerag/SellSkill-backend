import { DependeniciesData } from "../../entities/interface";

export const Career_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career get all use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = () => {
        return careerRepository.getAll();
    };

    return {
        execute
    };
};
