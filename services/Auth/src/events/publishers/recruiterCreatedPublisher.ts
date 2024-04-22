import { Publisher, Subjects, RecruiterCreatedEvent } from "@sellskill/common"

export class RecruiterCreatedPublisher extends Publisher<RecruiterCreatedEvent> {
    subject: Subjects.RecruiterCreated = Subjects.RecruiterCreated
}