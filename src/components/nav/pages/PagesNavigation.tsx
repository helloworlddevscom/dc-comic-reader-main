import React from 'react';
import { MemoizedPages } from "./Pages";

interface PagesNavigationInput {
    id: string;
    setActivePanel: (panel:number) => void;
    panelURLs: any[];
    page: number;
}

export function PagesNavigation(props:PagesNavigationInput) {
  const { panelURLs, page, setActivePanel } = props;
    return (
    <MemoizedPages 
        panelURLs={panelURLs}
        page={page}
        setActivePanel={setActivePanel}      
        id="comic-reader-pages-screen"  
    />
    );
}

