// src/controllers/common/sendVerifyEmail.ts

import { Request, Response, NextFunction } from "express";
import { DependeniciesData } from "../../entities/interface";

export = (dependencies: DependeniciesData) => {
  const {
    usecases: { SendVerificationMail_Usecase },
  } = dependencies;
  
  const sendVerificationMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("sending Mail controller")

      const { job_type, host, team, candidate_email, candidates_emails, interviewId } = req.body;
      console.log("job_type, host, team, candidate_email, candidates_emails, interviewId")
      console.log(job_type, host, team, candidate_email, candidates_emails, interviewId )
      const verification = await SendVerificationMail_Usecase(dependencies).execute({ job_type, host, team, candidate_email, candidates_emails, interviewId });
      console.log("verification: ", verification)

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