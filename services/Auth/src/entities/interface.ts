import { ApplicantData, ApplicantLoginData } from "./applicant";
import { RecruiterData, RecruiterLoginData } from "./recruiter";
import { VerifyUser } from "./user";

export interface DependeniciesData {
    usecases: usecaseData;
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        login({email, password}: RecruiterLoginData): any
        verifyUser({email, verifyToken}: VerifyUser): any
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        login({email, password}: ApplicantLoginData): any
        verifyUser({email, verifyToken}: VerifyUser): any
    }
}

export interface usecaseData {
    Recruiter_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: RecruiterData) => Promise<any>;
    };
    Recruiter_Login_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password}: any) => Promise<any>;
    };
    Applicant_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: ApplicantData) => Promise<any>;
    };
    Applicant_Login_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password}: any) => Promise<any>;
    };
    SendVerificationMail_Usecase: (dependencies: DependeniciesData) => {
        execute: (email: string, password: string, role: string) => Promise<any>;
    };
    VerifyUser_Usecase: (dependencies: DependeniciesData) => {
        execute: ( verifyToken: string) => Promise<any>;
    };
}
