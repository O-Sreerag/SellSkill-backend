import { Response, Request, NextFunction } from 'express';
import { DependeniciesData } from '../../entities/interface';
import { RoomData } from '../../entities/room';
import { ApplicantData } from '../../entities/applicant';
import { RecruiterData } from '../../entities/recruiter';

export = (dependencies: DependeniciesData) => {

    const {
        usecases: { Room_Create_Usecase, Applicant_Get_Usecase, Recruiter_Get_Usecase }
    } = dependencies;

    return async (req: any, res: any, next: NextFunction) => {
        try {
            console.log("Create room controller");

            console.log("user1, user2, createdBy")
            console.log(req?.query.user1, req?.query.user2, req?.query.createdBy)
            const user1Email = req?.query.user1
            const user2Id = req?.query.user2
            const createdBy = req?.query.createdBy

            let user1Details, user2Details

            if (createdBy == "applicant") {
                user1Details = await Applicant_Get_Usecase(dependencies).execute({ email: user1Email, id: "" })
                user2Details = await Recruiter_Get_Usecase(dependencies).execute({ email: "", id: user2Id })
            } else if (createdBy == "recruiter") {
                user1Details = await Applicant_Get_Usecase(dependencies).execute({ email: "", id: user2Id })
                user2Details = await Recruiter_Get_Usecase(dependencies).execute({ email: user1Email, id: "" })
            }

            console.log("user1Details, user2Details")
            console.log(user1Details)
            console.log(user2Details)

            if (user1Details && user2Details) {
                const roomData: RoomData = {
                    user1Id: user1Details[0]._id,
                    user2Id: user2Details[0]._id,
                    user1_name: user1Details[0].name,
                    user2_name: user2Details[0].name,
                }
                console.log(roomData)
            
                const result = await Room_Create_Usecase(dependencies).execute(roomData);
                console.log(result);
            
                res.status(200).json({ message: "Room created successfully", result });
                next();
            } else {
                res.status(404).json({ message: "User details not found" });
            }
        } catch (err) {
            console.log("error creating room", err)
            next(err);
        }
    };
};