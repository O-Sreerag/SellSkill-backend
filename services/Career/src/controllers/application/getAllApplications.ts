import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_GetAll_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Get all applications controller");

            const {
                query: { career }
            } = req;

            const decodedToken: any = jwtDecode(career as string)
            console.log("decodedToken: ", decodedToken)
            const careerId = decodedToken?._id

            const result = await Application_GetAll_Usecase(dependencies).execute(careerId);
            console.log(result);

            res.status(200).json({ message: "Application retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
