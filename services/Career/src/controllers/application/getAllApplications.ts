
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_GetAll_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Get all applications controller");
            const careerId = req.query.careerId
            console.log("careerId :", careerId)
            const userId = req.userId
            console.log("userId :", userId)

            let result, forwho
            if (!careerId) {
                console.log("no careerId retrieving all applications of user")
                forwho = "applicant"
                result = await Application_GetAll_Usecase(dependencies).execute(userId, forwho)
            } else {
                console.log("careerId is present retrieving all applications of career")
                forwho = "career"
                result = await Application_GetAll_Usecase(dependencies).execute(careerId, forwho);
            }
            console.log(result);

            res.status(200).json({ message: "Applications retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
