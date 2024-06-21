import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Notification_ChangeStatus_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("ChangeStatus notification controller");

            const {
                params: {id}
            } = req;

            console.log("id: ", id)

            const result = await Notification_ChangeStatus_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Notification status changed successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
