import { DependeniciesData } from "../../entities/interface";

export const Career_GetAllForApplicant_Usecase = (dependencies: DependeniciesData) => {
    const {
        careerRepository
    } = dependencies;

    console.log("Career get all for applicant use case");

    if (!careerRepository) {
        console.log('The Career repository should exist in dependencies');
    }

    const execute = (careerIds: string[]) => {
        return careerRepository.getAllForApplicant(careerIds);
    };

    return {
        execute
    };
};
