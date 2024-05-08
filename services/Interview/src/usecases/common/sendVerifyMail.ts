import { DependeniciesData } from "../../entities/interface";
import { SendVerificationEmail } from "../../entities/common";
import { sentMail } from "../../utils/nodemailer";
import { AES, enc } from "crypto-js";

export const SendVerificationMail_Usecase = (
  dependencies: DependeniciesData
) => {

  console.log("send verification mail usecase")
  const execute = async ({ job_type, host, team, candidate_email, candidates_emails, interviewId }: SendVerificationEmail) => {

    console.log(job_type)
    if (host) {

      const secretKey = process.env.CRYPTO_KEY || "";
      const sendMailFunction = (email: string, emailTemplateOption: string) => {
        const data = { email: email, interviewId: interviewId, job_type: job_type, role: emailTemplateOption };

        const encryptedData = AES.encrypt(
          JSON.stringify(data),
          secretKey
        ).toString();
        console.log(encryptedData)

        const encodedData = encodeURIComponent(encryptedData);
        console.log(encodedData)

        const subject = "Confirm Your Interview";
        const verificationLink = `http://sellskill.online/interview/common/conform-for-interview?code=${encodedData}`;
        return sentMail(emailTemplateOption, email, subject, verificationLink);
      }

      switch (job_type) {
        case "one_on_one":
          // sending email to host and candidate_email
          if (host && candidate_email) {
            sendMailFunction(host, "1")
            sendMailFunction(candidate_email, "2")
          }  else {
            console.log("one_on_one, Host or candidatee_email was not found");
          }
          break;

        case "group":
          // sending email to host and candidates_emails
          if (host && candidates_emails) {
            sendMailFunction(host, "1")
            for (const email of candidates_emails) {
              sendMailFunction(email, "2");
            }
          } else {
            console.log("group, Host or candidates_emails was not found");
          }
          break;

        case "collective":
          // Send emails to host, candidates_emails and team
          if (team && candidate_email) {
            for (const email of team) {
              sendMailFunction(email, "1");
            }
            sendMailFunction(candidate_email, "2");
          } else {
            console.log("collective, team or candidate_email was not found");
          }
          break;

        default:
          console.log("Invalid job_type");
      }

      return true
    } else {
      console.log("Host was not found");
    }
  };
  return {
    execute,
  };
};
