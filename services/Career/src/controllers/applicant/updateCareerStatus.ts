import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Applicant_updateCareerStatus_Usecase}
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Update career in applicant controller");

            const {
                query: { careerId, status }
            } = req;
            const applicantId = req.userId

            if (!careerId || !status || !applicantId) {
                return res.status(400).json({ message: "Missing required query parameters: careerId, status, or applicantId" });
            }
            console.log("careerId:", careerId, "applicantId:", applicantId, "status:", status);

            const result = await Applicant_updateCareerStatus_Usecase(dependencies).execute(applicantId as string, careerId as string, status as string);
            console.log("Update result:", result);

            res.status(200).json({ message: "Career updated in applicant successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};