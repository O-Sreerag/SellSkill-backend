// src/controllers/recruiter/addRecruiter.ts

import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import bcrypt from 'bcrypt'
import { RecruiterCreatedPublisher } from "../../events/publishers/recruiterCreatedPublisher";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Recruiter_Signup_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("recruiter sign up controller")

            const {
                body = {}
            } = req;

            const {
                name,
                email,
                password,
                isGoogle,
            } = body;

            console.log(name, email, password, isGoogle)
            
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await Recruiter_Signup_Usecase(dependencies).execute({ name, email, password: hashedPassword, isGoogle});
            console.log(user)

            await new RecruiterCreatedPublisher(natsWrapper.client).publish({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                isGoogle: user.isGoogle,
                url: user?.url || "",
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