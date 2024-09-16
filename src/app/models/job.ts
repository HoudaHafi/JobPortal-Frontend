import { JobApplication } from "./job-application";
import { Recruiter } from "./recruiter";

export interface Job {
    id: number;
    title: string;
    description: string;
    requirements: string[];
    skills: string;
    location: string;
    niveau: string;
    avantages: string;
    deadline: string;
    datepub: string;
    type: TypeJob;
    contrat: Contrat;
    recruteur: Recruiter;
    jobApplication: JobApplication[];
}

export enum TypeJob {
    REMOTE = 'REMOTE',
    HYBRID = 'HYBRID',
    ONSITE = 'ONSITE'
}

export enum Contrat {
    CDI = 'CDI',
    CIVP = 'CIVP',
    CDD = 'CDD',
    FREELANCE = 'FREELANCE'
}

export enum Niveau {
    licence = 'licence',
    master = 'master',
    ingénieur = 'ingénieur'
}
