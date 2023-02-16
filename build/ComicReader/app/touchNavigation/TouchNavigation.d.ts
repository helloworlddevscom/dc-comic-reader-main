/// <reference types="react" />
interface TouchNavigationInput {
    id: string;
    panelPaginate: (newPanDirection: number) => void;
}
export declare function TouchNavigation(props: TouchNavigationInput): JSX.Element;
export {};
