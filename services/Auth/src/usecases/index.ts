// src/usecases/index.ts

import { Recruiter_Signup_Usecase } from "./recruiter/addRecruiter";
import { Recruiter_Login_Usecase } from "./recruiter/loginRecruiter";
import { Applicant_Signup_Usecase } from "./applicant/addApplicant";
import { Applicant_Login_Usecase } from "./applicant/loginApplicant";
import { SendVerificationMail_Usecase } from "./common/sendVerifyMailRecruiter";
import { VerifyUser_Usecase } from "./common/verifyUser";

export default {
    Recruiter_Signup_Usecase,
    Recruiter_Login_Usecase,

    Applicant_Signup_Usecase,
    Applicant_Login_Usecase,

    SendVerificationMail_Usecase,
    VerifyUser_Usecase,
}
