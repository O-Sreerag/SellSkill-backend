
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { RecruiterStatusChangedPublisher } from '../../events/publishers/recruiterStatusChangedPublisher';
import { natsWrapper } from '../../nats-wrapper';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Recruiter_Block_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Recruiter block status changing controller");

            const recruiterId = req.query.recruiterId

            const result = await Recruiter_Block_Usecase(dependencies).execute(recruiterId);
            console.log(result);

            await new RecruiterStatusChangedPublisher(natsWrapper.client).publish({
                _id: result._id,
                status: result?.status,
            });

            res.status(200).json({ message: "Recruiters block status changed successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
