import { DependeniciesData } from "../../entities/interface";

export const Career_Delete_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career delete use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return careerRepository.delete(id);
    };

    return {
        execute
    };
};
