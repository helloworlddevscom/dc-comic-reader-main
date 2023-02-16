/// <reference types="react" />
interface PagesNavigationInput {
    id: string;
    setActivePanel: (panel: number) => void;
    panelURLs: any[];
    page: number;
}
export declare function PagesNavigation(props: PagesNavigationInput): JSX.Element;
export {};
