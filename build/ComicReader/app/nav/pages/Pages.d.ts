import React from 'react';
interface PagesInput {
    id: string;
    setActivePanel: (panel: number) => void;
    panelURLs: any[];
    page: number;
}
export declare function Pages(props: PagesInput): JSX.Element;
export declare const MemoizedPages: React.MemoExoticComponent<typeof Pages>;
export {};
