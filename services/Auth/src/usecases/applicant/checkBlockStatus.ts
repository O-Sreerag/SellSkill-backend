import { ApplicantData, Applicant } from "../../entities/applicant";
import { DependeniciesData } from "../../entities/interface";

export const Applicant_CheckBlock_Usecase = (dependencies: DependeniciesData) => {
  const {
    applicantRepository ,
  } = dependencies;

  if (!applicantRepository)
    console.log("The applicant repository should exist in dependencies");

  const execute = (id: string) => {
    return applicantRepository.checkBlock(id);
  };
  return {
    execute,
  };
};