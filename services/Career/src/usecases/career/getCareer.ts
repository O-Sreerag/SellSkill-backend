import { DependeniciesData } from "../../entities/interface";

export const Career_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career get use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return careerRepository.get(id);
    };

    return {
        execute
    };
};
