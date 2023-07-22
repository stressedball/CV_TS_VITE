export interface ExperienceInterface {
    title: string;
    company: string;
    dateOfEntry: Date;
    dateOfEnd: Date;
    id: string;
    current: boolean;
}

export interface DiplomaInterface {
    title: string;
    school: string;
    dateOfObtention: Date;
    id: string;
}

export interface IdentityInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gitHub: string;
    linkedin: string;
    address: {
        number: string;
        street: string;
        zipCode: string;
        town: string;
    };
    currentTitle: string;
    description: string;
}

export interface SkillInterface {
    id: string;
    name: string;
}

export interface HobbyInterface {
    name: string;
    id: string;
}

import {ReactNode} from 'react';

export type ChildrenType = {
    children: ReactNode;
};
