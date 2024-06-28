
import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { natsWrapper } from '../../nats-wrapper';
import { ApplicantStatusChangedPublisher } from '../../events/publishers/applicantStatusChangedPublisher';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: {
            Applicant_Block_Usecase
        }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Applicant block status changing controller");

            const applicantId = req.query.applicantId

            const result = await Applicant_Block_Usecase(dependencies).execute(applicantId);
            console.log(result);

            await new ApplicantStatusChangedPublisher(natsWrapper.client).publish({
                _id: result._id,
                status: result?.status,
            });

            res.status(200).json({ message: "Applicants block status changed successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
