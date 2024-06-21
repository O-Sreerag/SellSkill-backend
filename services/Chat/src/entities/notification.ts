// Interface for notification data
export interface NotificationData {
    _id?: string;
    type: NotificationType;
    userId: string;
    role: string;
    message: string;
    createdAt?: Date;
    read?: boolean;
    careerId?: string;
    interviewId?: string;
}

// Enum for notification types
export enum NotificationType {
    CareerCreated = 'career_created',
    ApplicationReceived = 'application_received',
    InterviewCreated = 'interview_created',
    InterviewConfirmed = 'interview_confirmed',
    InterviewInvitation = 'interview_invitation',
    ApplicationAccepted = 'application_accepted',
}

// Notification class
export class Notification {
    _id?: string;
    type: NotificationType;
    userId: string;
    role: string;
    message: string;
    createdAt?: Date;
    read?: boolean;
    careerId?: string;
    interviewId?: string;

    constructor({
        _id,
        type,
        userId,
        role,
        message,
        createdAt,
        read,
        careerId,
        interviewId,
    }: NotificationData) {
        this._id = _id;
        this.type = type;
        this.userId = userId;
        this.role = role;
        this.message = message;
        this.createdAt = createdAt;
        this.read = read;
        this.careerId = careerId;
        this.interviewId = interviewId;
    }
}

