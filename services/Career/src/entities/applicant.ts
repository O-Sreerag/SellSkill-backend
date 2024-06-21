export interface CareerData {
    id: string;
    status: string;
}

export interface ApplicantData {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    image?: string;
    phoneNo?: number;
    applications?: string;
    events?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle: boolean;
    careers?:  CareerData[];
}

export class Applicant {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    image?: string;
    phoneNo?: number;
    applications?: string;
    events?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle: boolean;
    careers?:  CareerData[];
    
    constructor({
        _id,
        name,
        email,
        password,
        phoneNo,
        image,
        applications,
        events,
        verified,
        status,
        isGoogle,
        careers,
    }: ApplicantData) {
        this._id = _id
        this.name = name
        this.email = email
        this.password = password
        this.phoneNo = phoneNo
        this.image = image
        this.applications = applications
        this.events = events
        this.verified = verified
        this.status = status
        this.isGoogle = isGoogle
        this.careers = careers
    }
}