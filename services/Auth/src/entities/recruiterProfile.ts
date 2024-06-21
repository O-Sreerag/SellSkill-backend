export interface RecruiterProfileData {
    _id?: string;
    companyName: string;
    industry: string;
    headquarters: string;
    ceo: string;
    founded: string;
    employees: string;
    revenue: string;
}

export class RecruiterProfile {
    _id?: string;
    companyName: string;
    industry: string;
    headquarters: string;
    ceo: string;
    founded: string;
    employees: string;
    revenue: string;

    constructor({
        _id,
        companyName,
        industry,
        headquarters,
        ceo,
        founded,
        employees,
        revenue,
    }: RecruiterProfileData) {
        this._id = _id
        this.companyName = companyName
        this.industry = industry
        this.headquarters = headquarters
        this.ceo = ceo
        this.founded = founded
        this.employees = employees
        this.revenue = revenue
    }
}