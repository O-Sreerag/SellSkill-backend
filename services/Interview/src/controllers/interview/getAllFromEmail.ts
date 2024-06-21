import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_GetAllFromEmail_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get all from email interviews controller");
            const email = req.query?.email

            const result = await Interview_GetAllFromEmail_Usecase(dependencies).execute(email);
            console.log(result);

            res.status(200).json({ message: "Interview retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
