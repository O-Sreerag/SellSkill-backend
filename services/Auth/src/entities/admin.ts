export interface AdminData {
    _id?: string;
    email: string;
    password: string;
}

export interface AdminLoginData {
    email: string;
    password: string;
}

export class Admin {
    _id?: string;
    email: string;
    password: string;
    
    constructor({
        _id,
        email,
        password,
    }: AdminData) {
        this._id = _id
        this.email = email
        this.password = password
    }
}