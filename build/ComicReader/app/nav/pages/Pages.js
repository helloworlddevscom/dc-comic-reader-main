import React from 'react';
import { Page } from './Page';
export function Pages(props) {
    var panelURLs = props.panelURLs, page = props.page, setActivePanel = props.setActivePanel;
    return (React.createElement("div", { className: "\n            comic-reader--modal comic-reader--pages-container comic-reader--scrollbar\n          ", key: "page" }, panelURLs.map(function (panel, i) {
        return (React.createElement(Page, { key: i, panel: panel, page: i, currentPage: page, setActivePanel: setActivePanel, alt: "DC" }));
    })));
}
export var MemoizedPages = React.memo(Pages);
