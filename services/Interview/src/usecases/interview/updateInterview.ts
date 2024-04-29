import { InterviewData } from "../../entities/interview";
import { DependeniciesData } from "../../entities/interface";

export const Interview_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview update use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (id: string, interviewData: InterviewData) => {
        return interviewRepository.update(id, interviewData);
    };

    return {
        execute
    };
};
