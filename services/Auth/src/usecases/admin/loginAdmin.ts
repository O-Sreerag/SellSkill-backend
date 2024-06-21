import { AdminData, Admin } from "../../entities/admin";
import { DependeniciesData } from "../../entities/interface";

export const Admin_Login_Usecase = (dependencies: DependeniciesData) => {
  const {
    adminRepository ,
  } = dependencies;

  if (!adminRepository)
    console.log("The admin repository should exist in dependencies");

  const execute = ({ email, password }: Admin) => {
    return adminRepository.login({email, password});
  };
  return {
    execute,
  };
};