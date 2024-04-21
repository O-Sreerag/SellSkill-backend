import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_Get_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Get career controller");

            const {
                params: { id }
            } = req;

            const result = await Career_Get_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Career retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
