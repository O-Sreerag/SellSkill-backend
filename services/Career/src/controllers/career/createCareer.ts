import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { jwtDecode } from 'jwt-decode'

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_Create_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create career controller");

            const {
                body = {},
                query: { recruiter }
            } = req;
            
            const careerData = body; // Assuming career data is passed in the request body
            console.log("careerData")
            console.log(careerData)
            console.log("recruiter")
            console.log(recruiter)
            
            const decodedToken: any = jwtDecode(recruiter as string)
            console.log("decodedToken: ", decodedToken)
            careerData.recruiterId = decodedToken?._id

            const result = await Career_Create_Usecase(dependencies).execute(careerData);
            console.log(result);

            res.status(200).json({ message: "Career created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};

