// src/controllers/applicant/addApplicant.ts

import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import bcrypt from 'bcrypt'
import { ApplicantCreatedPublisher } from "../../events/publishers/applicantCreatedPublisher";
import { natsWrapper } from "../../nats-wrapper";

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
                name, 
                email,
                password,
                isGoogle,
            } = body;
            
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await Applicant_Signup_Usecase(dependencies).execute({ name, email, password: hashedPassword, isGoogle});
            console.log(user)

            await new ApplicantCreatedPublisher(natsWrapper.client).publish({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                isGoogle: user.isGoogle,
                verified: user?.verified || false,
                status: user?.status || true,
            });

            res.status(200).json({ message: "Sign up successful, mail has send", user});
            next();
        } catch (err) {
            next(err)
        }
    };
}