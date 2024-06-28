import { Publisher, Subjects, ApplicantStatusChangedEvent } from "@sellskill/common"

export class ApplicantStatusChangedPublisher extends Publisher<ApplicantStatusChangedEvent> {
    subject: Subjects.ApplicantStatusChanged = Subjects.ApplicantStatusChanged
}