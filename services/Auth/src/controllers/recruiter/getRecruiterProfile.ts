
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Recruiter_GetProfile_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get recruiter profile controller");
            console.log(req?.query?.recruiterId)
            const id = req?.query?.recruiterId

            const result = await Recruiter_GetProfile_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Recruiter profile retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
