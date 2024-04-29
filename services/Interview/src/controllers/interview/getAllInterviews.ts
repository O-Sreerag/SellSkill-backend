import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_GetAll_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Get all interviews controller");

            const {
                query: { recruiter }
            } = req;

            const decodedToken: any = jwtDecode(recruiter as string)
            console.log("decodedToken: ", decodedToken)
            const recruiterId = decodedToken?._id

            const result = await Interview_GetAll_Usecase(dependencies).execute(recruiterId);
            console.log(result);

            res.status(200).json({ message: "Interview retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
