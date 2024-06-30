import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_Delete_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create application controller");

            const {
                params: {id}
            } = req;

            console.log("id: ", id)

            const result = await Application_Delete_Usecase(dependencies).execute(id);
            console.log(result);

            res.status(200).json({ message: "Application created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};