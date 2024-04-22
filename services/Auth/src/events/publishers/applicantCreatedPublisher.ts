import { Publisher, Subjects, ApplicantCreatedEvent } from "@sellskill/common"

export class ApplicantCreatedPublisher extends Publisher<ApplicantCreatedEvent> {
    subject: Subjects.ApplicantCreated = Subjects.ApplicantCreated
}