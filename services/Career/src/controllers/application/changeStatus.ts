import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_ChangeStatus_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Change status application controller");

            const {
                body = {},
                query: {status, applicationId}
            } = req;

            if (!status || !applicationId) {
                return res.status(400).json({ message: "Missing required query parameters: status and applicationId" });
            }

            console.log("Received status and applicationId:", status, applicationId);

            const result = await Application_ChangeStatus_Usecase(dependencies).execute(applicationId as string, status as string);
            console.log(result);

            res.status(200).json({ message: "Application Status changed successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
