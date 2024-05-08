export interface VerifyUser {
    email: string;
    role?: string,
}

export interface ComformForInterview {
    email: string,
    interviewId: string,
    job_type: string,
    role: string,
}

export interface SendVerificationEmail {
    job_type: string,
    host?: string,
    team?: string[],
    candidate_email?: string,
    candidates_emails?: string,
    interviewId: string,
}