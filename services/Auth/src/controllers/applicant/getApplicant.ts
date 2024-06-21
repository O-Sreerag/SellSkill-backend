
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Applicant_Get_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get applicant controller");
            console.log(req?.userId)
            const id = req?.userId

            const result = await Applicant_Get_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Applicant retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
