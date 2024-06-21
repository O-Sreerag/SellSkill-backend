import { ComformForInterview } from "../../entities/common";
import { DependeniciesData } from "../../entities/interface";
import { AES, enc } from "crypto-js";


export const ComformForInterview_Usecase = (dependencies: DependeniciesData) => {
  const {
    interviewRepository,
  } = dependencies;

  if (!interviewRepository) {
    console.log("Interview repositories should be present in dependencies");
  }

  const execute = (verificationData: string) => {
    console.log("comform for interview usecase");

    try {
      const secretKey = process.env.CRYPTO_KEY || "";
      console.log("process.env.CRYPTO_KEY :", process.env.CRYPTO_KEY);
      console.log("verificationData :", verificationData);

      const decodedData = decodeURIComponent(verificationData);
      console.log(decodedData)
      
      const bytes = AES.decrypt(decodedData, secretKey);
      const { email, interviewId, job_type, role, }: ComformForInterview = JSON.parse(
        bytes.toString(enc.Utf8)
      );
      console.log("email, interviewId, job_type, role");
      console.log(email, interviewId, job_type, role);
      
      return interviewRepository.comformForInterview({ email, interviewId, job_type, role, }) 
    } catch (error) {
      console.error("An error occurred in the execute function:", error);
    }
  };

  return {
    execute,
  };
};
