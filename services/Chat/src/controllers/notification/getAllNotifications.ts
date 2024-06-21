import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Notification_GetAll_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Get all notifications controller");
            const userId = req.userId
            console.log("userId")
            console.log(userId)

            const result = await Notification_GetAll_Usecase(dependencies).execute(userId);
            console.log(result);
            
            res.status(200).json({ message: "All Notifications retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};

// const {
//     query: { recruiter }
// } = req;
// const decodedToken: any = jwtDecode(recruiter as string)
// console.log("decodedToken: ", decodedToken)
// const userId = decodedToken?._id