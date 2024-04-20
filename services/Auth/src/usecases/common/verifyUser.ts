import { VerifyUser } from "../../entities/user";
import { DependeniciesData } from "../../entities/interface";
import { AES, enc } from "crypto-js";


export const VerifyUser_Usecase = (dependencies: DependeniciesData) => {
  const {
    recruiterRepository,
    applicantRepository,
  } = dependencies;

  if (!recruiterRepository || !applicantRepository) {
    console.log("The repositories should be present in dependencies");
  }

  const execute = (verificationData: string) => {
    console.log("verify user usecase");

    try {
      const secretKey = process.env.CRYPTO_KEY || "";
      console.log("process.env.CRYPTO_KEY :", process.env.CRYPTO_KEY);
      console.log("verificationData :", verificationData);

      const decodedData = decodeURIComponent(verificationData);
      console.log(decodedData)
      
      const bytes = AES.decrypt(decodedData, secretKey);
      console.log(bytes)
      const decryptedString = bytes.toString(enc.Utf8);
      console.log(decryptedString)
      const decryptedData: VerifyUser = JSON.parse(decryptedString);
      console.log(decryptedData)

      // const { email, verifyToken, role }: VerifyUser = JSON.parse(decryptedData)
      const { email, verifyToken, role }: VerifyUser = JSON.parse(
        bytes.toString(enc.Utf8)
      );
      console.log(email, verifyToken, role);

      return role == "recruiter" 
        ? recruiterRepository.verifyUser({ verifyToken, email }) 
        : applicantRepository.verifyUser({ verifyToken, email });
    } catch (error) {
      console.error("An error occurred in the execute function:", error);
    }
  };

  return {
    execute,
  };
};
