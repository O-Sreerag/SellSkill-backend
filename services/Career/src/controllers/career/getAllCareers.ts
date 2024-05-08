import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_GetAll_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Get all careers controller");
            const recruiterId = req.userId

            const result = await Career_GetAll_Usecase(dependencies).execute(recruiterId);
            console.log(result);
            
            res.status(200).json({ message: "All Careers retrieved successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};

// const {
//     query: { recruiter }
// } = req;
// const decodedToken: any = jwtDecode(recruiter as string)
// console.log("decodedToken: ", decodedToken)
// const recruiterId = decodedToken?._id