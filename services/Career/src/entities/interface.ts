import { CareerData } from "./career";
import { ApplicantData } from "./applicant";
import { RecruiterData } from "./recruiter";
import { VerifyUser } from "./common";
import { ApplicationData } from "./application";

export interface DependeniciesData {
    usecases: usecaseData;
    careerRepository: {
        create: (careerData: CareerData) => Promise<any>;
        update: (id: string, careerData: CareerData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: (recruiterId: string) => Promise<any>;
        getAllForApplicant: (careerIds: string[]) => Promise<any>;
    };
    applicationRepository: {
        create: (applicationData: ApplicationData) => Promise<any>;
        update: (id: string, applicationData: ApplicationData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: (id: string) => Promise<any>;
        getAllForApplicant: (id: string) => Promise<any>;
        changeStatus:(applicationId: string, status: string) => Promise<any>;
    };
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        get: (id: string) => Promise<any>;
        verifyUser({email}: VerifyUser): any
    };
    applicantRepository: {
        get: (id: string) => Promise<any>;
        add(applicant: ApplicantData): any;
        verifyUser({email}: VerifyUser): any
        getApplicants: (applicantIds: string[]) => Promise<any>;
        addCareer:(applicantId: string, careerId: string) => Promise<any>;
        updateCareerStatus:(applicantId: string, careerId: string, status: string) => Promise<any>;
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
        execute: (recruiterId: string) => Promise<any>;
    };
    Career_GetAllForApplicant_Usecase: (dependencies: DependeniciesData) => {
        execute: (careerIds: string[]) => Promise<any>;
    };

    // Application
    Application_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (applicationData: ApplicationData) => Promise<any>;
    };
    Application_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, careerData: ApplicationData) => Promise<any>;
    };
    Application_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Application_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Application_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, forwho: string) => Promise<any>;
    };
    Application_ChangeStatus_Usecase: (dependencies: DependeniciesData) => {
        execute: (applicationId: string, status: string) => Promise<any>;
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
    Career_GetApplicants_Usecase: (dependencies: DependeniciesData) => { 
        execute: (applicantIds: string[]) => Promise<any>;
    };
    Applicant_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    
    // Applicant
    Applicant_AddCareer_Usecase: (dependencies: DependeniciesData) => { 
        execute: (aapplicantId: string, careerId: string) => Promise<any>;
    };
    Applicant_updateCareerStatus_Usecase: (dependencies: DependeniciesData) => { 
        execute: (applicantId: string, careerId: string, status: string) => Promise<any>;
    };

}
