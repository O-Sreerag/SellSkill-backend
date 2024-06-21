
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Recruiter_Get_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get recruiter controller");
            console.log(req?.userId)
            const id = req?.userId

            const result = await Recruiter_Get_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Recruiter retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
