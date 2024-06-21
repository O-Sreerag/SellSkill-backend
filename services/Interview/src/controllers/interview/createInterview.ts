import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Interview_Create_Usecase }
    } = dependencies;

    return async (req: any, res: Response, next: NextFunction) => {
        try {
            console.log("Create interview controller");

            const {
                body = {},
            } = req;

            const interviewData = body;
            console.log("interviewData")
            console.log(interviewData)

            const recruiterId = req?.userId
            console.log("recruiterId:", recruiterId)
            interviewData.recruiterId = recruiterId

            // let host, team, candidate_email, candidates_emails

            // if (interviewData.eventType == "one_on_one") {
            //     host = interviewData.emails[0]
            //     candidate_email = interviewData.emails[1]
            // } else if (interviewData.eventType == "group") {
            //     host = interviewData.emails[0]
            //     candidates_emails = interviewData.emails.slice(1)
            // } else if (interviewData.eventType == "collective") {
            //     team = interviewData.emails.slice(0, -1)
            //     candidates_emails = interviewData.emails[interviewData.emails.length - 1]
            // }

            // // Remove emails field and add host, team, candidate_email, candidates_emails
            // delete interviewData.emails;
            // interviewData.host = host;
            // interviewData.team = team;
            // interviewData.candidate_email = candidate_email;
            // interviewData.candidates_emails = candidates_emails;

            const result = await Interview_Create_Usecase(dependencies).execute(interviewData);
            console.log(result);

            res.status(200).json({ message: "Interview created successfully", result });
            next();
        } catch (err) {
            next(err);
        }
    };
};
