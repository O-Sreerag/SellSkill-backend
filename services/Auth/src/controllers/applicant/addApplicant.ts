import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import axios from 'axios';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Applicant_Signup_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            console.log("Applicant sign up route")

            const {
                body = {}
            } = req;

            const {
                email,
                password,
                isGoogle,
            } = body;

            const user = await Applicant_Signup_Usecase(dependencies).execute({ email, password, isGoogle});
            console.log(user)

            // const response = await axios.post('http://sellskill.online/auth/common/sendEmail', {
            //     email,
            //     password,
            //     role: "applicant"
            // });

            // return response
            res.status(200).json({ message: "Sign up successful, mail has send", user});

            next();
        } catch (err) {
            next(err)
        }
    };
}