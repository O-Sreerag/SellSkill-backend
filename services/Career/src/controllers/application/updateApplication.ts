import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_Update_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create application controller");

            const {
                body = {},
                params: {id}
            } = req;

            const applicationData = body; // Assuming application data is passed in the request body

            const result = await Application_Update_Usecase(dependencies).execute(id, applicationData);
            console.log(result);

            res.status(200).json({ message: "Application created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
