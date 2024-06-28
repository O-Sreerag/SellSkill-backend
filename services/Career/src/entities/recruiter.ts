// export interface ApplicantsData {
//     id: string;
//     status: string;
// }

export interface RecruiterData {
    _id?:string;
    name?: string;
    email?: string;
    password?: string;
    phoneNo?: number;
    url?: string;
    jobRoles?: string[];
    profile?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle?: boolean;
    // applicants?:  ApplicantsData[];
}

export class Recruiter {
    _id?:string;
    name?: string;
    email?: string;
    password?: string;
    phoneNo?: number;
    url?: string;
    jobRoles?: string[];
    profile?: string;
    verified?: boolean;
    status?: boolean;
    isGoogle?: boolean;
    // applicants?:  ApplicantsData[];
    
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
        isGoogle,
        // applicants,
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
        // this.applicants = applicants
    }
}