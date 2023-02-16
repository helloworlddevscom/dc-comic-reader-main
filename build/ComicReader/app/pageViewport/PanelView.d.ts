import React from 'react';
interface PanelViewInput {
    panelURLs: any[];
    page: number;
    direction: number;
    isPBP: boolean;
    panDirection: number;
    panStep: number;
    widthPanel: number;
    top: number;
    left: number;
}
export declare const PanelViewBase: (props: PanelViewInput) => JSX.Element;
export declare const PanelView: React.MemoExoticComponent<(props: PanelViewInput) => JSX.Element>;
export {};
