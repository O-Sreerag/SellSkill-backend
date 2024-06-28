// src/usecases/index.ts

// Room
import { Room_Create_Usecase } from "./room/createRoom";
import { Room_Delete_Usecase } from "./room/deleteRoom";
import { Room_Update_Usecase } from "./room/updateRoom";
import { Room_Get_Usecase } from "./room/getRoom";
import { Room_GetAll_Usecase } from "./room/getAllRooms";
import { Message_Create_Usecase } from "./room/createMessage";

// Notification
import { Notification_Create_Usecase } from "./notification/createNotification";
import { Notification_Delete_Usecase } from "./notification/deleteNotification";
import { Notification_Update_Usecase } from "./notification/updateNotification";
import { Notification_Get_Usecase } from "./notification/getNotification";
import { Notification_GetAll_Usecase } from "./notification/getAllNotifications";
import { Notification_ChangeStatus_Usecase } from "./notification/changeStatus";

// Auth
import { Applicant_Signup_Usecase } from "./auth/addApplicant";
import { Applicant_Get_Usecase } from "./auth/getApplicant";
import { Recruiter_Signup_Usecase } from "./auth/addRecruiter";
import { Recruiter_Get_Usecase } from "./auth/getRecruiter";
import { VerifyUser_Usecase } from "./auth/verifyUser";
import { Applicant_Update_Usecase } from "./auth/updateApplicant";
import { Recruiter_Update_Usecase } from "./auth/updateRecruiter";

export default {
    // Room
    Room_Create_Usecase,
    Room_Update_Usecase,
    Room_Delete_Usecase,
    Room_Get_Usecase,
    Room_GetAll_Usecase,
    Message_Create_Usecase,

    // Notification
    Notification_Create_Usecase,
    Notification_Delete_Usecase,
    Notification_GetAll_Usecase,
    Notification_Get_Usecase,
    Notification_Update_Usecase,
    Notification_ChangeStatus_Usecase,

    // Auth
    Applicant_Signup_Usecase,
    Applicant_Get_Usecase,
    Recruiter_Signup_Usecase,
    Recruiter_Get_Usecase,
    VerifyUser_Usecase,
    Applicant_Update_Usecase,
    Recruiter_Update_Usecase,
}