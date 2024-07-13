import { Message } from "node-nats-streaming";
import { Subjects, Listener, RecruiterCreatedEvent } from "@sellskill/common";
import { Recruiter_Signup_Usecase } from "../../usecases/auth/addRecruiter";
import dependencies from "../../config/dependencies";

export class RecruiterCreatedListener extends Listener<RecruiterCreatedEvent> {
  subject: Subjects.RecruiterCreated = Subjects.RecruiterCreated;
  queueGroupName = "interview";

  async onMessage(data: RecruiterCreatedEvent["data"], msg: Message) {
    const { _id, name, email, password, isGoogle, verified, status } = data;
    console.log("Event data! recieved in CAREER service: ",  _id, name, email, password, isGoogle, verified, status)

    try {
        const savedRecruiter = await Recruiter_Signup_Usecase(dependencies).execute({ _id, name, email, password, isGoogle, verified, status})        
        console.log("recruiter saved in CAREER service", savedRecruiter)

        msg.ack();
        console.log("message acked @");
        
    } catch (error) {
      console.log(error);
    }
  }
}