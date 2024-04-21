// src/entities/interfaces

import { ApplicantData, ApplicantLoginData } from "./applicant";
import { RecruiterData, RecruiterLoginData } from "./recruiter";
import { VerifyUser } from "./user";

export enum LoginStatus {
    Success,
    IncorrectPassword,
    NotVerified,
    UserNotFound,
}

export enum UserRole {
    Recruiter = "recruiter",
    Applicant = "applicant",
}

export interface JWT {
    _id: string;
    role: UserRole;
}

export interface DependeniciesData {
    usecases: usecaseData;
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        login({email, password}: RecruiterLoginData): any
        verifyUser({email}: VerifyUser): any
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        login({email, password}: ApplicantLoginData): any
        verifyUser({email}: VerifyUser): any
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
        execute: ({email, role}: VerifyUser) => Promise<any>;
    };
    VerifyUser_Usecase: (dependencies: DependeniciesData) => {
        execute: ( verifyToken: string) => Promise<any>;
    };
}
