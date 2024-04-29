export interface InterviewData {
    _id?: string;
    recruiterId?: string;
    host?: string;
    team?: string;
    candidate_name?: string;
    candidate_id?: string;
    candidate_email?: string;
    date?: Date;
    time?: string;
    duration?: string;
}

export class Interview {
    _id?: string;
    recruiterId?: string;
    host?: string;
    team?: string;
    candidate_name?: string;
    candidate_id?: string;
    candidate_email?: string;
    date?: Date;
    time?: string;
    duration?: string;
    
    constructor({
        _id,
        recruiterId,
        host,
        team,
        candidate_name,
        candidate_id,
        candidate_email,
        date,
        time,
        duration,
    }: InterviewData) {
        this._id = _id;
        this.recruiterId = recruiterId;
        this.host = host;
        this.team = team;
        this.candidate_name = candidate_name;
        this.candidate_id = candidate_id;
        this.candidate_email = candidate_email;
        this.date = date;
        this.time = time;
        this.duration = duration;
    }
}
