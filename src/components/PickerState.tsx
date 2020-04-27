export interface PickerState {
    verb: string;
    platform: string;
    lang: string;
    task: string;
    suggestion: string;
    sentence: string;
    ready: boolean;
}

export interface PickerProps {

}

export interface LearningPath {
    name: string;

}


export interface LearningCategory {
    name: string;

}

export enum LearningPathStep { 
    Build,
    Deploy,
    Run,
    Migrate,
    Integrate
}