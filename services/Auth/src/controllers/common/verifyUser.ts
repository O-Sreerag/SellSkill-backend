import { Request, Response, NextFunction } from "express";
import { DependeniciesData } from "../../entities/interface";

export = (dependencies: DependeniciesData): any => {
  const {
    usecases: { VerifyUser_Usecase },
  } = dependencies;
  const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("verify user controller")
      const verifyToken: string = req.query.code as string;

      const verification = await VerifyUser_Usecase(dependencies).execute(
        verifyToken );

      if (!verification) {
        res.status(400).json({ error: "Invalid Verification Link" });
      } else {
        res.status(200).json({ message: "Verified successfully" });
      }
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return verifyUser;
};