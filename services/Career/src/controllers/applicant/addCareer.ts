import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Applicant_AddCareer_Usecase}
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Add career in applicant controller");

            const {
                query: { careerId }
            } = req;

            const applicantId = req.userId
            console.log("careerId ", "applicantId")
            console.log(careerId, applicantId)

            const result = await Applicant_AddCareer_Usecase(dependencies).execute(applicantId, careerId);
            console.log(result);

            res.status(200).json({ message: "Career added in applicant successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};