import React from 'react';
import { MemoizedPages } from "./Pages";
export function PagesNavigation(props) {
    var panelURLs = props.panelURLs, page = props.page, setActivePanel = props.setActivePanel;
    return (React.createElement(MemoizedPages, { panelURLs: panelURLs, page: page, setActivePanel: setActivePanel, id: "comic-reader-pages-screen" }));
}
