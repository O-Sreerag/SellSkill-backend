export interface ApplicationData {
    _id?: string;
    qualification: string[];
    contact: number;
    email: string;
    name: string;
    preferred_location: string;
    resume: string;
    skill_set: string[];
    notice_period: number;
    experience: string;
    expected_ctc: number;
    current_ctc: number;
    current_location: string;
    grad_year: Date;
    gender: string;
    current_employer: string;
    dob: Date;
}

export class Application {
    _id?: string;
    qualification: string[];
    contact: number;
    email: string;
    name: string;
    preferred_location: string;
    resume: string;
    skill_set: string[];
    notice_period: number;
    experience: string;
    expected_ctc: number;
    current_ctc: number;
    current_location: string;
    grad_year: Date;
    gender: string;
    current_employer: string;
    dob: Date;

    constructor({
        _id,
        qualification,
        contact,
        email,
        name,
        preferred_location,
        resume,
        skill_set,
        notice_period,
        experience,
        expected_ctc,
        current_ctc,
        current_location,
        grad_year,
        gender,
        current_employer,
        dob,
    }: ApplicationData) {
        this._id = _id;
        this.qualification = qualification;
        this.contact = contact;
        this.email = email;
        this.name = name;
        this.preferred_location = preferred_location;
        this.resume = resume;
        this.skill_set = skill_set;
        this.notice_period = notice_period;
        this.experience = experience;
        this.expected_ctc = expected_ctc;
        this.current_ctc = current_ctc;
        this.current_location = current_location;
        this.grad_year = grad_year;
        this.gender = gender;
        this.current_employer = current_employer;
        this.dob = dob;
    }
}
