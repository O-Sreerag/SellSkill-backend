import { RecruiterData, Recruiter } from "../../entities/recruiter";
import { DependeniciesData } from "../../entities/interface";

export const Recruiter_Login_Usecase = (dependencies: DependeniciesData) => {
  const {
    recruiterRepository,
  } = dependencies;
  
  console.log("recruiter login usecase")
  if (!recruiterRepository)
    console.log("The recruiter repository should exist in dependencies");

  const execute = async ({ email, password }: Recruiter) => {
    try {
      const result = await recruiterRepository.login({ email, password });
      return result;
    } catch (error) {
      console.error("An error occurred in the execute function:", error);
    }
  };

  return {
    execute,
  };
};

