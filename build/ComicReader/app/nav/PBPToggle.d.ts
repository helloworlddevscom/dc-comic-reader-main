/// <reference types="react" />
interface PBPToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}
export declare function PBPToggle(props: PBPToggleInput): JSX.Element;
export {};
