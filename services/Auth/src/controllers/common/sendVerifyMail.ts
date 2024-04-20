import { Request, Response, NextFunction } from "express";
import { DependeniciesData } from "../../entities/interface";

export = (dependencies: DependeniciesData): any => {
  const {
    usecases: {  SendVerificationMail_Usecase},
  } = dependencies;
  const sendVerificationMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password, role } = req.body;
      const verification = await SendVerificationMail_Usecase(dependencies).execute(email, password, role);

      if (!verification) {
        res.status(400).json({ error: "An error occurred while sending the email" });
      } else {
        res.status(200).json({ message: "Mail sent successfully", verification });
      }
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return sendVerificationMail;
};