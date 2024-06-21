import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Room_Get_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Get room controller");

            const {
                params: {id}
            } = req;

            console.log("id: ", id)

            const result = await Room_Get_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Room retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
