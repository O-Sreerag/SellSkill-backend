import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { MessageData } from '../../entities/room';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Message_Create_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create message controller");

            const {
                body = {},
            } = req;

            console.log('Body:', body);

            const { room, message, status, time, from, to } = body;
            console.log("messageData :", room, message, status, time, from, to)

            const messageData: MessageData = {
                message,
                status,
                time,
                from,
                to,
            };

            const result = await Message_Create_Usecase(dependencies).execute(room, messageData);
            console.log(result);

            res.status(200).json({ message: "message created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
