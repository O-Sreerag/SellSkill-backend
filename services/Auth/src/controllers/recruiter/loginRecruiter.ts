import { Request, Response, NextFunction } from "express";
import { DependeniciesData } from "../../entities/interface";
import { generateAccessToken } from "../../utils/jwt";
import { Recruiter } from "../../entities/recruiter";

export = (dependencies: DependeniciesData) => {
  const {
    usecases: { Recruiter_Login_Usecase },
  } = dependencies;

  const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log("recruiter login controller")
    try {
      const { email, password} = req.body;
      const user: string | any= await Recruiter_Login_Usecase(dependencies).execute({email, password});
    
      if (user === "email") {
        res.status(400).json({ error: "Invalid Email" });
      } else if (user === "password") {
        res.status(401).json({ error: "Invalid Password" });
      } else if (user === "notverified") {
        res.status(403).json({
          error: "Verification Pending",
          message: "Please check your email and verify your email.",
          notVerified: true,
        });
      } else {
        console.log(user.id); 
        
        const token= generateAccessToken(user._id as string)
        res.status(200).json({ message: "Login successful", user, token });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return loginUser;
};