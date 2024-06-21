// src/controllers/common/login.ts

import { Request, Response, NextFunction } from "express";
import { DependeniciesData, LoginStatus } from "../../entities/interface";
import { generateAccessAdminToken } from "../../utils/jwt";

export = (dependencies: DependeniciesData) => {
    const {
        usecases: { Admin_Login_Usecase },
    } = dependencies;

    const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
        console.log("admin login controller")

        try {
            const { email, password } = req.body;
            let loginResult = await Admin_Login_Usecase(dependencies).execute({ email, password });
            console.log("Admin login result:", loginResult);

            switch (loginResult) {
                case LoginStatus.UserNotFound:
                    res.status(401).json({ error: "Invalid Email" });
                    break;
                case LoginStatus.IncorrectPassword:
                    res.status(401).json({ error: "Invalid Password" });
                    break;
                default:
                    console.log(loginResult)
                    const adminToken = generateAccessAdminToken({ _id: loginResult._id, email: loginResult.email, role: "admin" });
                    res.status(200).json({ message: "Login successful", user: loginResult, adminToken });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    return loginAdmin;
};