import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_Create_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Create career controller");
            
            const {
                body = {},
            } = req;
            
            const careerData = body;
            console.log("careerData")
            console.log(careerData)

            console.log("recruiter id")
            console.log(req?.userId)
            const recruiter = req.userId
            careerData.recruiterId = recruiter

            const result = await Career_Create_Usecase(dependencies).execute(careerData);
            console.log(result);

            res.status(200).json({ message: "Career created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};