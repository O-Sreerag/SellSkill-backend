export interface ApplicantProfileData {
    _id?: string;
    fullName: string;
    age: string;
    gender: string;
    country: string;
    region: string;
}

export class ApplicantProfile {
    _id?: string;
    fullName: string;
    age: string;
    gender: string;
    country: string;
    region: string;

    constructor({
        _id,
        fullName,
        age,
        gender,
        country,
        region
    }: ApplicantProfileData) {
        this._id = _id
        this.fullName = fullName
        this.age = age
        this.gender = gender
        this.country = country
        this.region = region
    }
}