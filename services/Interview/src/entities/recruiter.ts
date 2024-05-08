export interface RecruiterData {
    _id?:string;
    email: string;
    name?: string;
    password: string;
    phoneNo?: number;
    url?: string;
    jobRoles?: string[];
    profile?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle: boolean;
}

export class Recruiter {
    _id?:string;
    email: string;
    name?: string;
    password: string;
    phoneNo?: number;
    url?: string;
    jobRoles?: string[];
    profile?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle: boolean;
    
    constructor({
        _id,
        name,
        email,
        password,
        phoneNo,
        url,
        jobRoles,
        profile,
        verified,
        status,
        isGoogle
    }: RecruiterData) {
        this._id = _id
        this.email = email
        this.name = name
        this.password = password
        this.phoneNo = phoneNo
        this.url = url
        this.jobRoles = jobRoles
        this.profile = profile
        this.verified = verified
        this.status = status
        this.isGoogle = isGoogle
    }
}