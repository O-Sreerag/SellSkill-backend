// src/controllers/applicant/addApplicant.ts

import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import bcrypt from 'bcrypt'

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Applicant_Signup_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("applicant sign up controller")

            const {
                body = {}
            } = req;

            const {
                email,
                password,
                isGoogle,
            } = body;
            
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await Applicant_Signup_Usecase(dependencies).execute({ email, password: hashedPassword, isGoogle});
            console.log(user)

            res.status(200).json({ message: "Sign up successful, mail has send", user});
            next();
        } catch (err) {
            next(err)
        }
    };
}