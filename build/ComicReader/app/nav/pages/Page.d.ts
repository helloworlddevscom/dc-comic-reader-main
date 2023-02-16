/// <reference types="react" />
interface PageInput {
    currentPage: number;
    panel: any;
    page: number;
    alt: string;
    setActivePanel: (panel: number) => void;
}
export declare function Page(props: PageInput): JSX.Element;
export {};
