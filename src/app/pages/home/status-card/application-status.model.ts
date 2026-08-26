// application-status.model.ts
export type ApplicationStatus = 'pending' | 'in_progress' | 'approved' | 'rejected';

export interface Application {
    id: string;
    title: string;
    referenceNumber: string;
    updatedAt: Date;
    status: ApplicationStatus;
    remarks?: string;
}
