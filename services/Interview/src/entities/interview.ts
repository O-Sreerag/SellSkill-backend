export interface InterviewData {
    _id?: string;
    recruiterId?: string;
    host?: string;
    team?: string[];
    candidate_id?: string;
    candidate_email?: string;
    candidates_emails?: string[];
    eventType?: string;
    eventName?: string;
    date?: Date;
    time?: string;
    duration?: string;
    comformedEmails?: string[];
}

export class Interview {
    _id?: string;
    recruiterId?: string;
    host?: string;
    team?: string[];
    candidate_id?: string;
    candidate_email?: string;
    candidates_emails?: string[];
    eventType?: string;
    eventName?: string;
    date?: Date;
    time?: string;
    duration?: string;
    comformedEmails?: string[];
    
    constructor({
        _id,
        recruiterId,
        host,
        team,
        candidate_id,
        candidate_email,
        candidates_emails,
        eventType,
        eventName,
        date,
        time,
        duration,
        comformedEmails,
    }: InterviewData) {
        this._id = _id;
        this.recruiterId = recruiterId;
        this.host = host;
        this.team = team;
        this.candidate_id = candidate_id;
        this.candidate_email = candidate_email;
        this.candidates_emails = candidates_emails;
        this.eventName = eventName;
        this.eventType = eventType;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.comformedEmails = comformedEmails;
    }
}
