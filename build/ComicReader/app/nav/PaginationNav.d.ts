/// <reference types="react" />
interface PaginationNavInput {
    id: string;
    className: string;
    isPBP: boolean;
    paginate: (newDirection: number) => void;
    panelPaginate: (newPanDirection: number) => void;
    page: number;
    pageCount: number;
}
export declare function PaginationNav(props: PaginationNavInput): JSX.Element;
export {};
