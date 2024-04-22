import { CareerData } from "./career";
import { ApplicantData } from "./applicant";
import { RecruiterData } from "./recruiter";
import { VerifyUser } from "./common";

export interface DependeniciesData {
    usecases: usecaseData;
    careerRepository: {
        create: (careerData: CareerData) => Promise<any>;
        update: (id: string, careerData: CareerData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: () => Promise<any>;
    };
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        verifyUser({email}: VerifyUser): any
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        verifyUser({email}: VerifyUser): any
    }
}

export interface usecaseData {
    // Career
    Career_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (careerData: CareerData) => Promise<any>;
    };
    Career_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, careerData: CareerData) => Promise<any>;
    };
    Career_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Career_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Career_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: () => Promise<any>;
    };

    // Auth
    Recruiter_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: RecruiterData) => Promise<any>;
    };
    Applicant_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: ApplicantData) => Promise<any>;
    };
    VerifyUser_Usecase: (dependencies: DependeniciesData) => {
        execute: ( verifyToken: string) => Promise<any>;
    };
}
