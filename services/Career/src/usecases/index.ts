// src/usecases/index.ts

// career
import { Career_Create_Usecase } from "./career/createCareer";
import { Career_Delete_Usecase } from "./career/deleteCareer";
import { Career_Update_Usecase } from "./career/updateCareer";
import { Career_Get_Usecase } from "./career/getCareer";
import { Career_GetAll_Usecase } from "./career/getAllCareers";

// auth
import { Applicant_Signup_Usecase } from "./auth/addApplicant"
import { Recruiter_Signup_Usecase } from "./auth/addRecruiter"
import { VerifyUser_Usecase } from "./auth/verifyUser";

export default {
    // Career
    Career_Create_Usecase,
    Career_Update_Usecase,
    Career_Delete_Usecase,
    Career_Get_Usecase,
    Career_GetAll_Usecase,

    // Auth
    Applicant_Signup_Usecase,
    Recruiter_Signup_Usecase,
    VerifyUser_Usecase,
}