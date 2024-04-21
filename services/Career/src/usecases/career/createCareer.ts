import { CareerData, Career } from "../../entities/career";
import { DependeniciesData } from "../../entities/interface";

export const Career_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career add use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = (careerData: CareerData) => {
        const career = new Career(careerData);
        return careerRepository.create(career);
    };

    return {
        execute
    };
};
