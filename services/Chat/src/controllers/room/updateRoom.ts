import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Room_Update_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Update room controller");

            const {
                body = {},
                params: {id}
            } = req;

            const roomData = body;

            const result = await Room_Update_Usecase(dependencies).execute(id, roomData);
            console.log(result);

            res.status(200).json({ message: "Room update successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
