/// <reference types="react" />
interface PagesToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}
export declare function PagesToggle(props: PagesToggleInput): JSX.Element;
export {};
