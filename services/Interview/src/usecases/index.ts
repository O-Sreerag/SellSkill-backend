// src/usecases/index.ts

// interview
import { Interview_Create_Usecase } from "./interview/createInterview";
import { Interview_Delete_Usecase } from "./interview/deleteInterview";
import { Interview_Update_Usecase } from "./interview/updateInterview";
import { Interview_Get_Usecase } from "./interview/getInterview";
import { Interview_GetAll_Usecase } from "./interview/getAllInterviews";
import { Interview_GetAllFromEmail_Usecase } from "./interview/getAllFromEmail";

// auth
import { Applicant_Signup_Usecase } from "./auth/addApplicant"
import { Recruiter_Signup_Usecase } from "./auth/addRecruiter"
import { VerifyUser_Usecase } from "./auth/verifyUser";
import { Applicant_Update_Usecase } from "./auth/updateApplicant";
import { Recruiter_Update_Usecase } from "./auth/updateRecruiter";

import { SendVerificationMail_Usecase } from "./common/sendVerifyMail";
import { ComformForInterview_Usecase } from "./common/comformForInterview";

export default {
    // Interview
    Interview_Create_Usecase,
    Interview_Update_Usecase,
    Interview_Delete_Usecase,
    Interview_Get_Usecase,
    Interview_GetAll_Usecase,
    ComformForInterview_Usecase,
    Interview_GetAllFromEmail_Usecase,

    // Auth
    Applicant_Signup_Usecase,
    Recruiter_Signup_Usecase,
    VerifyUser_Usecase,
    Applicant_Update_Usecase,
    Recruiter_Update_Usecase,

    // common
    SendVerificationMail_Usecase,
}