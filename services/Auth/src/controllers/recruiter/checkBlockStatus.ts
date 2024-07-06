
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Recruiter_CheckBlock_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Recruiter check block status  controller");

            const recruiterId = req?.userId

            const result = await Recruiter_CheckBlock_Usecase(dependencies).execute(recruiterId);
            console.log(result);

            res.status(200).json({ message: "Recruiters check block status successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
