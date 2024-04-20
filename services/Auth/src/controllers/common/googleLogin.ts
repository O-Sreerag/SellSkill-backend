import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Recruiter_Signup_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            console.log("recruiter sign up route")
            console.log(req)

            const {
                body = {}
            } = req;

            const {
                email,
                password,
                isGoogle,
            } = body;

            const response = await Recruiter_Signup_Usecase(dependencies).execute({ email, password, isGoogle});

            res.json({
                status: true,
                content: response   
            })

            next();

        } catch (err) {
            next(err)
        }
    };
}