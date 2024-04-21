export interface CareerData {
    _id?: string;
    salary?: number;
    requirements?: string[];
    required_skills?: string[];
    contact_name?: string;
    responsibilities?: string[];
    benefits?: string[];
    job_type?: string;
    opening_status?: boolean;
    industry?: string;
    work_exp?: number;
    date_opened?: Date;
    target_date?: Date;
    posting_title?: string;
    applicants?: string[];
    url?: string;
}

export class Career {
    _id?: string;
    salary?: number;
    requirements?: string[];
    required_skills?: string[];
    contact_name?: string;
    responsibilities?: string[];
    benefits?: string[];
    job_type?: string;
    opening_status?: boolean;
    industry?: string;
    work_exp?: number;
    date_opened?: Date;
    target_date?: Date;
    posting_title?: string;
    applicants?: string[];
    url?: string;
    
    constructor({
        _id,
        salary,
        requirements,
        required_skills,
        contact_name,
        responsibilities,
        benefits,
        job_type,
        opening_status,
        industry,
        work_exp,
        date_opened,
        target_date,
        posting_title,
        applicants,
        url,
    }: CareerData) {
        this._id = _id;
        this.salary = salary;
        this.requirements = requirements;
        this.required_skills = required_skills;
        this.contact_name = contact_name;
        this.responsibilities = responsibilities;
        this.benefits = benefits;
        this.job_type = job_type;
        this.opening_status = opening_status;
        this.industry = industry;
        this.work_exp = work_exp;
        this.date_opened = date_opened;
        this.target_date = target_date;
        this.posting_title = posting_title;
        this.applicants = applicants;
        this.url = url;
    }
}
