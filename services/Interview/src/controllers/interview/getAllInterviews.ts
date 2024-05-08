import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_GetAll_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get all interviews controller");
            const recruiterId = req?.userId

            const result = await Interview_GetAll_Usecase(dependencies).execute(recruiterId);
            console.log(result);

            res.status(200).json({ message: "Interview retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
