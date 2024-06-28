// src/controllers/recruiter/addRecruiter.ts

import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import bcrypt from 'bcrypt'
import { RecruiterCreatedPublisher } from "../../events/publishers/recruiterCreatedPublisher";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Recruiter_Update_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("recruiter sign up controller")

            const {
                body = {}
            } = req;

            console.log("req.body")
            console.log(body)
            console.log(req?.userId)
            const id = req?.userId

            const user = await Recruiter_Update_Usecase(dependencies).execute(id, body);
            console.log(user)

            res.status(200).json({ message: "Recruiter update successful", user});
            next();
        } catch (err) {
            next(err)
        }
    };
}