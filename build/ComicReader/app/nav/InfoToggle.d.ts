/// <reference types="react" />
interface InfoToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}
export declare function InfoToggle(props: InfoToggleInput): JSX.Element;
export {};
