import { JobApplication } from "./job-application";

export interface Candidat {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    telephone: string;
    niveau: string;
    avatar: string;
    nbexperience: string;
    dateNaissance: string;
    adresse: string;
    jobApplication: JobApplication[];
}
