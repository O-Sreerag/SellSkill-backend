import { VerifyUser } from "../../entities/common";
import { DependeniciesData } from "../../entities/interface";

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
      // const execute = ({
      //   _id,
      //   role
      // })
      const role = "recruiter"
      const email = ""

      return role == "recruiter" 
        ? recruiterRepository.verifyUser({ email }) 
        : applicantRepository.verifyUser({ email });
    } catch (error) {
      console.error("An error occurred in the execute function:", error);
    }
  };

  return {
    execute,
  };
};
