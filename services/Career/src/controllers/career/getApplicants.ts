import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { Career_Get_Usecase } from '../../usecases/career/getCareer';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_GetApplicants_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Get all careers controller");

            const {
                params: {id}
            } = req;

            console.log("id: ", id)

            const career = await Career_Get_Usecase(dependencies).execute(id)
            console.log("career:", career)

            const applicantIds = career.applicants // applicantIds will be an array of ids

            const result = await Career_GetApplicants_Usecase(dependencies).execute(applicantIds);
            console.log(result);
            
            res.status(200).json({ message: "All Applicants in Career retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};