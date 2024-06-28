// src/controllers/applicant/addApplicant.ts

import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import bcrypt from 'bcrypt'
import { ApplicantCreatedPublisher } from "../../events/publishers/applicantCreatedPublisher";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Applicant_Update_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("applicant sign up controller")

            const {
                body = {}
            } = req;

            console.log("req.body")
            console.log(body)
            console.log(req?.userId)
            const id = req?.userId

            const user = await Applicant_Update_Usecase(dependencies).execute(id, body);
            console.log(user)

            res.status(200).json({ message: "Applicant update successful", user});
            next();
        } catch (err) {
            next(err)
        }
    };
}