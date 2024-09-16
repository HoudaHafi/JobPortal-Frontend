import { Candidat } from "./candidat";
import { Job } from "./job";

export interface Postulation {
    id: number;
    title: string;
    status: StatusEnum;
    cv: string;
    dateCandidature: Date;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    niveau: string;
    job: number;
    candidat: number;

}

export enum StatusEnum {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}