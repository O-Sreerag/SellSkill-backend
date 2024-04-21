// src/controllers/common/login.ts

import { Request, Response, NextFunction } from "express";
import { DependeniciesData, UserRole } from "../../entities/interface";
import { generateAccessToken } from "../../utils/jwt";
import { LoginStatus } from "../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const {
        usecases: { Recruiter_Login_Usecase, Applicant_Login_Usecase },
    } = dependencies;

    const loginUser = async (req: Request, res: Response, next: NextFunction) => {
        console.log("user login controller")

        try {
            const { email, password } = req.body;
            let loginResult = await Recruiter_Login_Usecase(dependencies).execute({ email, password });
            console.log("Recruiter login result:", loginResult);
            let role = UserRole.Recruiter
            
            if (!loginResult || loginResult === LoginStatus.UserNotFound) {
                console.log("user not found at recruiter repo!! going to applicant repo")

                // If user not found in Recruiter repository, check Applicant repository
                loginResult = await Applicant_Login_Usecase(dependencies).execute({ email, password });
                console.log("Applicant login result:", loginResult);
                role = UserRole.Applicant
            }

            switch (loginResult) {   
                case LoginStatus.IncorrectPassword:
                    res.status(401).json({ error: "Invalid Password" });
                    break;
                case LoginStatus.NotVerified:
                    res.status(403).json({
                        error: "Verification Pending",
                        message: "Please check your email and verify your email.",
                        notVerified: true,
                    });
                    break;
                case LoginStatus.UserNotFound:
                    res.status(400).json({ error: "Invalid Email" });
                    break;
                default:
                    console.log(loginResult)
                    const token = generateAccessToken({_id: loginResult._id, role: role});
                    res.status(200).json({ message: "Login successful", user: loginResult, token });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    return loginUser;
};