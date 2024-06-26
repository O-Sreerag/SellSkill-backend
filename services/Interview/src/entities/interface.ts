import { InterviewData } from "./interview";
import { ApplicantData } from "./applicant";
import { RecruiterData } from "./recruiter";
import { VerifyUser, SendVerificationEmail, ComformForInterview } from "./common";

export interface DependeniciesData {
    usecases: usecaseData;
    interviewRepository: {
        create: (interviewData: InterviewData) => Promise<any>;
        update: (id: string, interviewData: InterviewData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: (recruiterId: string) => Promise<any>;
        comformForInterview: ({ email, job_type, interviewId, role }: ComformForInterview) => Promise<any>;
        getAllFromEmail: (email: string) => Promise<any>;
    };
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        get: (id: string) => Promise<any>;
        update(id: string, recruiter: RecruiterData): any;
        verifyUser({email}: VerifyUser): any
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        get: (id: string) => Promise<any>;
        update(id: string, applicant: ApplicantData): any;
        verifyUser({email}: VerifyUser): any
    }
}

export interface usecaseData {
    // Interview
    Interview_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (interviewData: InterviewData) => Promise<any>;
    };
    Interview_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, interviewData: InterviewData) => Promise<any>;
    };
    Interview_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Interview_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Interview_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: (recruiterId: string) => Promise<any>;
    };
    ComformForInterview_Usecase: (dependencies: DependeniciesData) => {
        execute: (verificationData: string) => any;
    };
    Interview_GetAllFromEmail_Usecase: (dependencies: DependeniciesData) => {
        execute: (email: string) => Promise<any>;
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
    Applicant_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, applicant: ApplicantData) => Promise<any>;
    };
    Recruiter_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, recruiter: RecruiterData) => Promise<any>;
    };

    // common
    SendVerificationMail_Usecase: (dependencies: DependeniciesData) => {
        execute: ({job_type, host, team, candidate_email, candidates_emails, interviewId}: SendVerificationEmail) => Promise<any>;
    };
}
