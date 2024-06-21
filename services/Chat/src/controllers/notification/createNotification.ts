import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { NotificationData } from '../../entities/notification';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Notification_Create_Usecase, Applicant_Get_Usecase, Recruiter_Get_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Create notification controller");

            const {
                body = {},
            } = req;

            console.log('Body:', body);

            const { type, userId, role, message, careerId, interviewId, read } = body;
            console.log("messageData :", type, userId, role, message, careerId, interviewId, read)

            const notificationData: NotificationData = {
                type,
                userId,
                role,
                message,
                careerId : careerId || "",
                interviewId : interviewId || "",
                read,
            };

            const result = await Notification_Create_Usecase(dependencies).execute(notificationData);
            console.log(result);

            res.status(200).json({ message: "Notification created successfully", result });
            next();
        } catch (err) {
            console.log("error creating notification", err)
            next(err);
        }
    };
};