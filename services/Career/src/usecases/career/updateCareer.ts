import { CareerData } from "../../entities/career";
import { DependeniciesData } from "../../entities/interface";

export const Career_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career update use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = (id: string, careerData: CareerData) => {
        return careerRepository.update(id, careerData);
    };

    return {
        execute
    };
};
