import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Notification_Update_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create notification controller");

            const {
                body = {},
                params: {id}
            } = req;

            const notificationData = body;

            const result = await Notification_Update_Usecase(dependencies).execute(id, notificationData);
            console.log(result);

            res.status(200).json({ message: "Notification created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
