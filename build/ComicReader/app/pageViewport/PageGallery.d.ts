import React from 'react';
interface PageGalleryInput {
    panelURLs: any[];
    paginate: (newDirection: number) => void;
    page: number;
    direction: number;
    isPBP: boolean;
    width: number;
    height: number;
}
export declare const PageGalleryBase: (props: PageGalleryInput) => JSX.Element;
export declare const PageGallery: React.MemoExoticComponent<(props: PageGalleryInput) => JSX.Element>;
export {};
