import { DependeniciesData } from "../../entities/interface";
import { VerifyUser } from "../../entities/user";
import { sentMail } from "../../utils/nodemailer";
import { AES, enc } from "crypto-js";

export const SendVerificationMail_Usecase = (
  dependencies: DependeniciesData
) => {

  const execute = async ({email, role}: VerifyUser) => {

    if (email) {
      const secretKey = process.env.CRYPTO_KEY || "";

      const data = { email: email, role: role};

      const encryptedData = AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();
      console.log(encryptedData)
      
      const encodedData = encodeURIComponent(encryptedData);
      console.log(encodedData)

      const subject = "Confirm Your Email";
      const verificationLink = `http://sell-skill-frontend.vercel.app/verify-email?code=${encodedData}`;

      return sentMail(email, subject, verificationLink);
    } else {
      console.log("The user was not found");
    }
  };
  return {
    execute,
  };
};