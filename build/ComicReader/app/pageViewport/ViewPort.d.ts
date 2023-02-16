/// <reference types="react" />
interface ViewPortInput {
    pages: any[];
    isPagesOpen: boolean;
    paginate: (newDirection: number) => void;
    setActivePanel: (panel: number) => void;
    panelPaginate: (newPanDirection: number) => void;
    isMinimizerClosed: boolean;
    page: number;
    direction: number;
    isPBP: boolean;
    isZoomOpen: boolean;
    panDirection: number;
    panStep: number;
    isTutorialDone: boolean;
    setTutorialDone: (newValue: boolean) => void;
    path: string;
}
export declare function ViewPort(props: ViewPortInput): JSX.Element;
export {};
