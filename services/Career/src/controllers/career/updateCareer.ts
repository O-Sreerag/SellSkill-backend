import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Career_Update_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create career controller");

            const {
                body = {},
                params: {id}
            } = req;

            const careerData = body; // Assuming career data is passed in the request body

            const result = await Career_Update_Usecase(dependencies).execute(id, careerData);
            console.log(result);

            res.status(200).json({ message: "Career created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
