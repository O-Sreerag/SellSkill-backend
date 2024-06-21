// src/entities/interfaces

import { ApplicantData, ApplicantLoginData } from "./applicant";
import { RecruiterData, RecruiterLoginData } from "./recruiter";
import { AdminLoginData } from "./admin";
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

export interface JWT_Admin {
    _id: string;
    email: string;
    role: string;
}

export interface DependeniciesData {
    usecases: usecaseData;
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        get: (id: string) => Promise<any>;
        login({ email, password }: RecruiterLoginData): any
        verifyUser({ email }: VerifyUser): any
        getAll: () => Promise<any>;
        block: (id: string) => Promise<any>;
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        get: (id: string) => Promise<any>;
        login({ email, password }: ApplicantLoginData): any
        verifyUser({ email }: VerifyUser): any
        getAll: () => Promise<any>;
        block: (id: string) => Promise<any>;
    }
    adminRepository: {
        login({ email, password }: AdminLoginData): any
    }
}

export interface usecaseData {
    // admin
    Admin_Login_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password }: any) => Promise<any>;
    };

    // recruiter
    Recruiter_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: RecruiterData) => Promise<any>;
    };
    Recruiter_Login_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password }: any) => Promise<any>;
    };
    Recruiter_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: () => Promise<any>;
    };
    Recruiter_Block_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Recruiter_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    

    // applicant
    Applicant_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: ApplicantData) => Promise<any>;
    };
    Applicant_Login_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password }: any) => Promise<any>;
    };
    Applicant_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: () => Promise<any>;
    };
    Applicant_Block_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Applicant_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };

    // common
    SendVerificationMail_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, role }: VerifyUser) => Promise<any>;
    };
    VerifyUser_Usecase: (dependencies: DependeniciesData) => {
        execute: (verifyToken: string) => Promise<any>;
    };
}
