export interface ApplicationData {
    _id?: string;
    applicantId?: string;
    careerId?:string;
    careerDetails?: {
        posting_title?: string;
        industry?: string;
    }
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_no?: string;
    dob?: Date;
    address?: string;
    gender?: string;
    current_location?: string;
    current_employer?: string;
    current_ctc?: number;
    experience?: number;
    grad_year?: Date;
    notice_period?: number;
    expected_ctc?: number;
    skill_set?: string[];
    qualifications?: string[];
    resume?: string;
    status?: string;
}

export class Application {
    _id?: string;
    applicantId?: string;
    careerId?:string;
    careerDetails?: {
        posting_title?: string;
        industry?: string;
    }
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_no?: string;
    dob?: Date;
    address?: string;
    gender?: string;
    current_location?: string;
    current_employer?: string;
    current_ctc?: number;
    experience?: number;
    grad_year?: Date;
    notice_period?: number;
    expected_ctc?: number;
    skill_set?: string[];
    qualifications?: string[];
    resume?: string;
    status?: string;

    constructor({
        _id,
        applicantId,
        careerId,
        careerDetails,
        first_name,
        last_name,
        email,
        phone_no,
        dob,
        address,
        gender,
        current_location,
        current_employer,
        current_ctc,
        experience,
        grad_year,
        notice_period,
        expected_ctc,
        skill_set,
        qualifications,
        resume,
        status,

    }: ApplicationData) {
        this._id = _id;
        this.applicantId = applicantId;
        this.careerId = careerId;
        this.careerDetails = careerDetails;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_no = phone_no;
        this.dob = dob;
        this.address = address;
        this.gender = gender;
        this.current_location = current_location;
        this.current_employer = current_employer;
        this.current_ctc = current_ctc;
        this.expected_ctc = expected_ctc;
        this.experience = experience;
        this.grad_year = grad_year;
        this.notice_period = notice_period;
        this.skill_set = skill_set;
        this.qualifications = qualifications;
        this.resume = resume;
        this.status = status;
    }
}