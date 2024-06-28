
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Applicant_GetByIds_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get applicants by ids controller");
            console.log(req.query?.ids)
            const ids = req.query?.ids
            

            const result = await Applicant_GetByIds_Usecase(dependencies).execute(ids);
            console.log(result);

            res.status(200).json({ message: "Applicants by ids retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
