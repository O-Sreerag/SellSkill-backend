import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_GetAll_Usecase, Applicant_Get_Usecase, Career_GetAllForApplicant_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Get all careers controller");
            const recruiterId = req.userId
            const role = req.role

            console.log("recruiterId, role :", recruiterId, role)

            let result
            if (role == "recruiter") {
                result = await Career_GetAll_Usecase(dependencies).execute(recruiterId);
            } else if (role == "applicant") {
                const applicant = await Applicant_Get_Usecase(dependencies).execute(recruiterId);
                console.log("applicant")
                console.log(applicant)
                const careerIds = applicant?.careers
                result = await Career_GetAllForApplicant_Usecase(dependencies).execute(careerIds);
            }
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