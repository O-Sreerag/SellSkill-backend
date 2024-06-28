// src/usecases/index.ts

// career
import { Career_Create_Usecase } from "./career/createCareer";
import { Career_Delete_Usecase } from "./career/deleteCareer";
import { Career_Update_Usecase } from "./career/updateCareer";
import { Career_Get_Usecase } from "./career/getCareer";
import { Career_GetAll_Usecase } from "./career/getAllCareers";
import { Career_GetApplicants_Usecase } from "./career/getApplicants";
import { Career_GetAllForApplicant_Usecase } from "./career/getAllForApplicant";

// auth
import { Applicant_Signup_Usecase } from "./auth/addApplicant"
import { Recruiter_Signup_Usecase } from "./auth/addRecruiter"
import { VerifyUser_Usecase } from "./auth/verifyUser";
import { Application_Create_Usecase } from "./application/createApplication";
import { Application_Delete_Usecase } from "./application/deleteApplication";
import { Application_GetAll_Usecase } from "./application/getAllApplications";
import { Application_Get_Usecase } from "./application/getApplication";
import { Application_Update_Usecase } from "./application/updateApplication";
import { Applicant_Update_Usecase } from "./auth/updateApplicant";
import { Recruiter_Update_Usecase } from "./auth/updateRecruiter";

// Applicant
import { Applicant_AddCareer_Usecase } from "./applicant/createCareerInApplicant";
import { Applicant_updateCareerStatus_Usecase } from "./applicant/updateCareerInApplicant";
import { Application_ChangeStatus_Usecase } from "./application/changeStatus";
import { Applicant_Get_Usecase } from "./applicant/getApplicant";

export default {
    // Career
    Career_Create_Usecase,
    Career_Update_Usecase,
    Career_Delete_Usecase,
    Career_Get_Usecase,
    Career_GetAll_Usecase,
    Career_GetApplicants_Usecase,
    Career_GetAllForApplicant_Usecase,

    // Application
    Application_Create_Usecase,
    Application_Update_Usecase,
    Application_Delete_Usecase,
    Application_Get_Usecase,
    Application_GetAll_Usecase,
    Application_ChangeStatus_Usecase,

    // Auth
    Applicant_Signup_Usecase,
    Recruiter_Signup_Usecase,
    VerifyUser_Usecase,
    Applicant_Update_Usecase,
    Recruiter_Update_Usecase,

    // Applicant
    Applicant_AddCareer_Usecase,
    Applicant_updateCareerStatus_Usecase,
    Applicant_Get_Usecase,
}