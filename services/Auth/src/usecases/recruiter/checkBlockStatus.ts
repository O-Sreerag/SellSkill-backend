import { RecruiterData, Recruiter } from "../../entities/recruiter";
import { DependeniciesData } from "../../entities/interface";

export const Recruiter_CheckBlock_Usecase = (dependencies: DependeniciesData) => {
  const {
    recruiterRepository ,
  } = dependencies;

  if (!recruiterRepository)
    console.log("The recruiter repository should exist in dependencies");

  const execute = (id: string) => {
    return recruiterRepository.checkBlock(id);
  };
  return {
    execute,
  };
};