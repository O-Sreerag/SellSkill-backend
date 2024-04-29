import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode'

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_Create_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create interview controller");

            const {
                body = {},
                query: { recruiter }
            } = req;
            
            const interviewData = body;
            console.log("interviewData")
            console.log(interviewData)
            console.log("recruiter")
            console.log(recruiter)
            
            const decodedToken: any = jwtDecode(recruiter as string)
            console.log("decodedToken: ", decodedToken)
            interviewData.recruiterId = decodedToken?._id

            const result = await Interview_Create_Usecase(dependencies).execute(interviewData);
            console.log(result);

            res.status(200).json({ message: "Interview created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};

