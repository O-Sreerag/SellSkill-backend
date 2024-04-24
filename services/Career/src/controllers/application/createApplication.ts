import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode'

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_Create_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create application controller");

            const {
                body = {},
                query: { career }
            } = req;
            
            const applicationData = body;
            console.log("applicationData")
            console.log(applicationData)
            console.log("career")
            console.log(career)
            
            const decodedToken: any = jwtDecode(career as string)
            console.log("decodedToken: ", decodedToken)
            applicationData.careerId = decodedToken?._id

            const result = await Application_Create_Usecase(dependencies).execute(applicationData);
            console.log(result);

            res.status(200).json({ message: "Application created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};

