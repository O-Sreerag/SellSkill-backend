import { Message } from "node-nats-streaming";
import { Subjects, Listener, ApplicantCreatedEvent } from "@sellskill/common";
import { Applicant_Signup_Usecase } from "../../usecases/auth/addApplicant";
import dependencies from "../../config/dependencies";

export class ApplicantCreatedListener extends Listener<ApplicantCreatedEvent> {
    
  subject: Subjects.ApplicantCreated = Subjects.ApplicantCreated;
  queueGroupName = "chat";

  async onMessage(data: ApplicantCreatedEvent["data"], msg: Message) {
    const { _id, name, email, password, isGoogle, verified, status } = data;
    console.log("Event data! recieved in CAREER service: ",  _id, name, email, password, isGoogle, verified, status)

    try {
        const savedApplicant = await Applicant_Signup_Usecase(dependencies).execute({ _id, name, email, password, isGoogle, verified, status})        
        console.log("applicant saved in CAREER service", savedApplicant)

        msg.ack();
        console.log("message acked @");

    } catch (error) {
      console.log(error);
    }
  }
}