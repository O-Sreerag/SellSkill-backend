// src/usecases/index.ts

import { Admin_Login_Usecase } from "./admin/loginAdmin"

import { Recruiter_Signup_Usecase } from "./recruiter/addRecruiter";
import { Recruiter_Login_Usecase } from "./recruiter/loginRecruiter";
import { Recruiter_GetAll_Usecase } from "./recruiter/getAllRecruiters";
import { Recruiter_Block_Usecase } from "./recruiter/blockRecruiter";
import { Recruiter_Get_Usecase } from "./recruiter/getRecruiter";
import { Recruiter_Update_Usecase } from "./recruiter/updateRecruiter";

import { Applicant_Signup_Usecase } from "./applicant/addApplicant";
import { Applicant_Login_Usecase } from "./applicant/loginApplicant";
import { Applicant_GetAll_Usecase } from "./applicant/getAllApplicants";
import { Applicant_Block_Usecase } from "./applicant/blockApplicant";
import { Applicant_Get_Usecase } from "./applicant/getApplicant";
import { Applicant_Update_Usecase } from "./applicant/updateApplicant";
import { Applicant_GetByIds_Usecase } from "./applicant/getByIds";

import { SendVerificationMail_Usecase } from "./common/sendVerifyMailRecruiter";
import { VerifyUser_Usecase } from "./common/verifyUser";

export default {
    Admin_Login_Usecase,

    Recruiter_Signup_Usecase,
    Recruiter_Login_Usecase,
    Recruiter_GetAll_Usecase,
    Recruiter_Block_Usecase,
    Recruiter_Get_Usecase,
    Recruiter_Update_Usecase,

    Applicant_Signup_Usecase,
    Applicant_Login_Usecase,
    Applicant_GetAll_Usecase,
    Applicant_Block_Usecase,
    Applicant_Get_Usecase,
    Applicant_Update_Usecase,
    Applicant_GetByIds_Usecase,

    SendVerificationMail_Usecase,
    VerifyUser_Usecase,
}
