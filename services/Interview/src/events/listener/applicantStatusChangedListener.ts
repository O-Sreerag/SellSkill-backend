import { Message } from "node-nats-streaming";
import { Subjects, Listener, ApplicantStatusChangedEvent } from "@sellskill/common";
import { Applicant_Update_Usecase } from "../../usecases/auth/updateApplicant";
import dependencies from "../../config/dependencies";

export class ApplicantStatusChangedListener extends Listener<ApplicantStatusChangedEvent> {
    
  subject: Subjects.ApplicantStatusChanged = Subjects.ApplicantStatusChanged;
  queueGroupName = "interview";

  async onMessage(data: ApplicantStatusChangedEvent["data"], msg: Message) {
    const { _id, status } = data;
    console.log("Event data! recieved in CAREER service: ",  _id, status)
    const gotStatus = status || false

    try {
        if(_id && gotStatus) {
            const savedApplicant = Applicant_Update_Usecase(dependencies).execute( _id, {status : gotStatus})    
            console.log("applicant status changed in CAREER service", savedApplicant)
        }

        msg.ack();
        console.log("message acked @");

    } catch (error) {
      console.log(error);
    }
  }
}