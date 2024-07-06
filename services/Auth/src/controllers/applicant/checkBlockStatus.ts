
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Applicant_CheckBlock_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Applicant check block status  controller");

            const applicantId = req?.userId

            const result = await Applicant_CheckBlock_Usecase(dependencies).execute(applicantId);
            console.log(result);

            res.status(200).json({ message: "Applicants check block status successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
