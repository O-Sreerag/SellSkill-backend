export interface RecruiterData {
    _id?:string;
    name?: string;
    email: string;
    password: string;
    phoneNo?: number;
    url?: string;
    jobRoles?: string[];
    profile?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle: boolean;
}

export interface RecruiterLoginData {
    email: string;
    password: string;
    isGoogle?: boolean;
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
        email,
        name, 
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
        this.name = name
        this.email = email
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