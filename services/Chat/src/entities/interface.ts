import { RoomData, MessageData } from './room'
import { NotificationData, NotificationType } from './notification';
import { ApplicantData } from "./applicant";
import { RecruiterData } from "./recruiter";
import { VerifyUser, getByDetails } from "./common";

export interface DependeniciesData {
    usecases: usecaseData;
    roomRepository: {
        create: (roomData: RoomData) => Promise<any>;
        update: (id: string, roomData: RoomData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: (userId: string) => Promise<any>;
        createMessage: (id: string, messageData: MessageData) => Promise<any>;
    };
    notificationRepository: {
        create: (notificationData: NotificationData) => Promise<any>;
        update: (id: string, notificationData: NotificationData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: (userId: string) => Promise<any>;
        changeStatus: (id: string) => Promise<any>;
    };
    recruiterRepository: {
        add(recruiter: RecruiterData): any;
        get: (id: string) => Promise<any>;
        update(id: string, recruiter: RecruiterData): any;
        verifyUser({ email }: VerifyUser): any
        getByEmail(email: string): any;
        getById(id: string): any;
    };
    applicantRepository: {
        add(applicant: ApplicantData): any;
        get: (id: string) => Promise<any>;
        update(id: string, applicant: ApplicantData): any;
        verifyUser({ email }: VerifyUser): any
        getApplicants: (applicantIds: string[]) => Promise<any>;
        getByEmail(email: string): any;
        getById(id: string): any;
    }
}

export interface usecaseData {
    // Room
    Room_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (roomData: RoomData) => Promise<any>;
    };
    Room_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, roomData: RoomData) => Promise<any>;
    };
    Room_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Room_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Room_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: (userId: string) => Promise<any>;
    };
    Message_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, messageData: MessageData) => Promise<any>;
    };

    // Notification
    Notification_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (notificationData: NotificationData) => Promise<any>;
    };
    Notification_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, notificationData: NotificationData) => Promise<any>;
    };
    Notification_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Notification_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Notification_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: (userId: string) => Promise<any>;
    };
    Notification_ChangeStatus_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };

    // Auth
    Applicant_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: ApplicantData) => Promise<any>;
    };
    Applicant_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: ({email, id}: getByDetails) => Promise<any>;
    };
    Recruiter_Signup_Usecase: (dependencies: DependeniciesData) => {
        execute: ({ email, password, isGoogle }: RecruiterData) => Promise<any>;
    };
    Recruiter_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: ({email, id}: getByDetails) => Promise<any>;
    };
    VerifyUser_Usecase: (dependencies: DependeniciesData) => {
        execute: (verifyToken: string) => Promise<any>;
    };
    Applicant_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, applicant: ApplicantData) => Promise<any>;
    };
    Recruiter_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, recruiter: RecruiterData) => Promise<any>;
    };
}