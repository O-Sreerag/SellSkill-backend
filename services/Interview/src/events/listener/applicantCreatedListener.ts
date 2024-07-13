import { Message } from "node-nats-streaming";
import { Subjects, Listener, ApplicantCreatedEvent } from "@sellskill/common";
import { Applicant_Signup_Usecase } from "../../usecases/auth/addApplicant";
import dependencies from "../../config/dependencies";

export class ApplicantCreatedListener extends Listener<ApplicantCreatedEvent> {
    
  subject: Subjects.ApplicantCreated = Subjects.ApplicantCreated;
  queueGroupName = "interview";

  async onMessage(data: ApplicantCreatedEvent["data"], msg: Message) {
    const { _id, email, password, isGoogle, verified, status } = data;
    console.log("Event data! recieved in CAREER service: ",  _id, email, password, isGoogle, verified, status)

    try {
        const savedApplicant = await Applicant_Signup_Usecase(dependencies).execute({ _id, email, password, isGoogle, verified, status})        
        console.log("applicant saved in CAREER service", savedApplicant)

        msg.ack();
        console.log("message acked @");

    } catch (error) {
      console.log(error);
    }
  }
}