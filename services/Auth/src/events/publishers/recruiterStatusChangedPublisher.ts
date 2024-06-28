import { Publisher, Subjects, RecruiterStatusChangedEvent } from "@sellskill/common"

export class RecruiterStatusChangedPublisher extends Publisher<RecruiterStatusChangedEvent> {
    subject: Subjects.RecruiterStatusChanged = Subjects.RecruiterStatusChanged
}