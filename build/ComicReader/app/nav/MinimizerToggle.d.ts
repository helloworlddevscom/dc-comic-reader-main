/// <reference types="react" />
interface MinimizerToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}
export declare function MinimizerToggle(props: MinimizerToggleInput): JSX.Element;
export {};
