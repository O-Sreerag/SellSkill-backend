import { ApplicantData, Applicant } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_Login_Usecase = (dependencies: DependeniciesData) => {
  const {
    applicantRepository ,
  } = dependencies;

  if (!applicantRepository)
    console.log("The applicant repository should exist in dependencies");

  const execute = ({ email, password }: Applicant) => {
    return applicantRepository.login({email, password});
  };
  return {
    execute,
  };
};