import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_Update_Usecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Create interview controller");

            const {
                body = {},
                params: {id}
            } = req;

            const interviewData = body; // Assuming interview data is passed in the request body

            const result = await Interview_Update_Usecase(dependencies).execute(id, interviewData);
            console.log(result);

            res.status(200).json({ message: "Interview created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
