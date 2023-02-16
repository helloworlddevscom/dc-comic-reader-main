/// <reference types="react" />
interface ZoomToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}
export declare function ZoomToggle(props: ZoomToggleInput): JSX.Element;
export {};
