
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Applicant_GetAll_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get all applicants controller");

            const result = await Applicant_GetAll_Usecase(dependencies).execute();
            console.log(result);

            res.status(200).json({ message: "Applicants retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
