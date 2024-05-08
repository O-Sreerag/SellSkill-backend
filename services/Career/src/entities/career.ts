export interface CareerData {
    _id?: string;
    recruiterId?: string;

    posting_title?: string;
    industry?: string;
    location?: string;
    salary_min?: number;
    salary_max?: number;
    workExp_min?: number;
    workExp_max?: number;
    job_type?: string;
    opening_status?: string;
    date_opened?: Date;
    target_date?: Date;
    contact_name?: string;
    no_of_positions?: number;

    job_description?: string[];
    required_skills?: string[];
    responsibilities?: string[];
    benefits?: string[];

    applicants?: string[];
    url?: string;
}

export class Career {
    _id?: string;
    recruiterId?: string;

    posting_title?: string;
    industry?: string;
    location?: string;
    salary_min?: number;
    salary_max?: number;
    workExp_min?: number;
    workExp_max?: number;
    job_type?: string;
    opening_status?: string;
    date_opened?: Date;
    target_date?: Date;
    contact_name?: string;
    no_of_positions?: number;

    job_description?: string[];
    required_skills?: string[];
    responsibilities?: string[];
    benefits?: string[];

    applicants?: string[];
    url?: string;
    
    constructor({
        _id,
        recruiterId,

        posting_title,
        industry,
        location,
        salary_min,
        salary_max,
        workExp_min,
        workExp_max,
        job_type,
        opening_status,
        date_opened,
        target_date,
        contact_name,
        no_of_positions,

        job_description,
        required_skills,
        responsibilities,
        benefits,

        applicants,
        url,
    }: CareerData) {
        this._id = _id;
        this.recruiterId = recruiterId;

        this.posting_title = posting_title;
        this.location = location;
        this.industry = industry;
        this.salary_min = salary_min;
        this.salary_max = salary_max;
        this.workExp_min = workExp_min;
        this.workExp_max = workExp_max;
        this.job_type = job_type;
        this.opening_status = opening_status;
        this.date_opened = date_opened;
        this.target_date = target_date;
        this.contact_name = contact_name;
        this.no_of_positions = no_of_positions;

        this.job_description = job_description;
        this.required_skills = required_skills;
        this.responsibilities = responsibilities;
        this.benefits = benefits;

        this.applicants = applicants;
        this.url = url;
    }
}
