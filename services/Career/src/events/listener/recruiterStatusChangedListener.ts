import { Message } from "node-nats-streaming";
import { Subjects, Listener, RecruiterStatusChangedEvent } from "@sellskill/common";
import { Recruiter_Update_Usecase } from "../../usecases/auth/updateRecruiter";
import dependencies from "../../config/dependencies";

export class RecruiterStatusChangedListener extends Listener<RecruiterStatusChangedEvent> {
    
  subject: Subjects.RecruiterStatusChanged = Subjects.RecruiterStatusChanged;
  queueGroupName = "career";

  async onMessage(data: RecruiterStatusChangedEvent["data"], msg: Message) {
    const { _id, status } = data;
    console.log("Event data! recieved in CAREER service: ",  _id, status)
    const gotStatus = status || false

    try {
        if(_id) {
            const savedRecruiter = Recruiter_Update_Usecase(dependencies).execute( _id, { status : gotStatus})        
            console.log("recruiter status changed in CAREER service", savedRecruiter)
        }

        msg.ack();
        console.log("message acked @");

    } catch (error) {
      console.log(error);
    }
  }
}