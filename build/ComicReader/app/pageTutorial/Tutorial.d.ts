/// <reference types="react" />
interface TutorialInput {
    id: string;
    setTutorialDone: (newValue: boolean) => void;
}
export declare function Tutorial(props: TutorialInput): JSX.Element;
export {};
