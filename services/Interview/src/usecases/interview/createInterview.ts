import { InterviewData, Interview } from "../../entities/interview";
import { DependeniciesData } from "../../entities/interface";

export const Interview_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        interviewRepository
    } = dependencies;

    console.log("Interview add use case");

    if (!interviewRepository) {
        console.log('The Interview repository should exist in dependencies');
    }

    const execute = (interviewData: InterviewData) => {
        const interview = new Interview(interviewData);
        return interviewRepository.create(interview);
    };

    return {
        execute
    };
};
