import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode'

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Application_Create_Usecase, Career_Update_Usecase , Career_Get_Usecase}
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Create application controller");

            const {
                body = {},
                query: { career }
            } = req;

            const applicationData = body;
            console.log("applicationData")
            console.log(applicationData)

            console.log("recruiter id")
            console.log(req?.userId)
            const applicant = req.userId
            applicationData.applicantId = applicant

            console.log("career")
            console.log(career)
            applicationData.careerId = career

            const result = await Application_Create_Usecase(dependencies).execute(applicationData);
            console.log(result);

            const careerResult = await Career_Get_Usecase(dependencies).execute(career)
            console.log("careerResult:", careerResult)

            const applicantsList = [...careerResult.applicants, applicant]

            // Update career document with the applicantId
            const careerUpdateResult = await Career_Update_Usecase(dependencies).execute(career, { applicants: applicantsList });
            console.log("Career update result:", careerUpdateResult);

            res.status(200).json({ message: "Application created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};