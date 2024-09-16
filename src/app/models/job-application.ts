import { Candidat } from "./candidat";
import { Job } from "./job";

export interface JobApplication {
    id: number;
    title: string;
    status: StatusEnum;
    cv: string;
    dateCandidature: Date;
    job: Job;
    candidat: Candidat;

}

export enum StatusEnum {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}
