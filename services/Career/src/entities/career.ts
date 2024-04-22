export interface CareerData {
    _id?: string;
    recruiterId?: string;

    posting_title?: string;
    salary?: number;
    contact_name?: string;
    job_type?: string;
    opening_status?: string;
    industry?: string;
    work_exp?: number;
    date_opened?: Date;
    target_date?: Date;
    revenue_per_person?: number; 
    no_of_positions?: number;

    // required_skills?: string[];
    // requirements?: string[];
    // responsibilities?: string[];
    // benefits?: string[];
    required_skills?: string;
    requirements?: string;
    responsibilities?: string;
    benefits?: string;

    applicants?: string[];
    url?: string;
}

export class Career {
    _id?: string;
    recruiterId?: string;

    posting_title?: string;
    salary?: number;
    contact_name?: string;
    job_type?: string;
    opening_status?: string;
    industry?: string;
    work_exp?: number;
    date_opened?: Date;
    target_date?: Date;
    revenue_per_person?: number; 
    no_of_positions?: number;
    
    // required_skills?: string[];
    // requirements?: string[];
    // responsibilities?: string[];
    // benefits?: string[];
    required_skills?: string;
    requirements?: string;
    responsibilities?: string;
    benefits?: string;
    
    applicants?: string[];
    url?: string;
    
    constructor({
        _id,
        recruiterId,

        posting_title,
        salary,
        contact_name,
        job_type,
        opening_status,
        industry,
        work_exp,
        date_opened,
        target_date,
        revenue_per_person,
        no_of_positions,

        required_skills,
        requirements,
        responsibilities,
        benefits,

        applicants,
        url,
    }: CareerData) {
        this._id = _id;
        this.recruiterId = recruiterId;

        this.posting_title = posting_title;
        this.salary = salary;
        this.contact_name = contact_name;
        this.job_type = job_type;
        this.opening_status = opening_status;
        this.industry = industry;
        this.work_exp = work_exp;
        this.date_opened = date_opened;
        this.target_date = target_date;
        this.revenue_per_person = revenue_per_person;
        this.no_of_positions = no_of_positions;

        this.requirements = requirements;
        this.required_skills = required_skills;
        this.responsibilities = responsibilities;
        this.benefits = benefits;

        this.applicants = applicants;
        this.url = url;
    }
}
