import { Job } from "./job";

export interface Recruiter {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    logo: string;
    societe: string;
    poste: string;
    secteur: string;
    idsociete: string;
    adrsociete: string;
    job: Job[];
}
