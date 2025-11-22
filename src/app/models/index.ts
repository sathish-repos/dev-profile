// Project-related interfaces
export interface Project {
    name: string;
    image: string;
    url: string;
    description: string;
}

// Contact-related interfaces
export interface ContactInfo {
    label: string;
    value: string;
}

export interface Contact {
    title: string;
    description: string;
    phone: ContactInfo;
    email: ContactInfo;
}

// Experience-related interfaces
export interface Experience {
    position: string;
    company: string;
    timeFrame: string;
    description?: string;
}

// Intro-related interfaces
export interface Intro {
    title: string;
    subTtle: string;
}

// Self-intro related interfaces
export interface SelfIntro {
    intro: string;
    picture: string;
}
