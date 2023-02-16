/// <reference types="react" />
interface NavigationInput {
    id: string;
    isPagesOpen: boolean;
    setOpenPages: (newValue: boolean) => void;
    isPBP: boolean;
    setPBP: (newValue: boolean) => void;
    isZoomOpen: boolean;
    setZoomOpen: (newValue: boolean) => void;
    paginate: (newDirection: number) => void;
    panelPaginate: (newPanDirection: number) => void;
    page: number;
    pageCount: number;
    isMinimizerClosed: boolean;
    setMinimizerOpen: (newValue: boolean) => void;
}
interface NavigationLowerInput {
    id: string;
    isPagesOpen: boolean;
    setOpenPages: (newValue: boolean) => void;
    isPBP: boolean;
    setPBP: (newValue: boolean) => void;
    isMinimizerClosed: boolean;
}
interface NavigationUpperInput {
    id: string;
    isMinimizerClosed: boolean;
    setMinimizerOpen: (newValue: boolean) => void;
}
export declare function Navigation(props: NavigationInput): JSX.Element;
export declare function NavigationMobileUpper(props: NavigationUpperInput): JSX.Element;
export declare function NavigationMobileLower(props: NavigationLowerInput): JSX.Element;
export {};
