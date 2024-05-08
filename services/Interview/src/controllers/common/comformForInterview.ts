// src/controllers/common/conformForInterview.ts

import { Request, Response, NextFunction } from "express";
import { DependeniciesData } from "../../entities/interface";

export = (dependencies: DependeniciesData) => {
  const {
    usecases: { ComformForInterview_Usecase },
  } = dependencies;
  
  const conformForInterview = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("conform for interview controller")

      const verifyToken: string = req.query.code as string;

      const verification = await ComformForInterview_Usecase(dependencies).execute(
        verifyToken);

      if (!verification) {
        res.status(400).json({ error: "Invalid Verification Link" });
      } else {
        res.status(200).json({ message: "Verified successfully" });
      }

    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return conformForInterview;
};