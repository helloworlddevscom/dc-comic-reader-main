import React from 'react';
import { NavArrowContainer } from '../containers/NavArrowContainer';
export function PaginationNav(props) {
    var paginate = props.paginate, page = props.page, pageCount = props.pageCount, isPBP = props.isPBP, panelPaginate = props.panelPaginate;
    return (React.createElement("div", { className: "comic-reader-row-flex--center" },
        React.createElement(NavArrowContainer, { srcImage: "url('/comic-reader/comic-viewer-arrow.png')", className: "comic-reader-icon-arrow-left", type: 'button', title: "go to previous", onClick: function () { return isPBP ? panelPaginate(-1) : paginate(-1); } }),
        React.createElement("div", { className: "comic-reader-icon-arrow-text" },
            page + 1,
            " of ",
            pageCount),
        React.createElement(NavArrowContainer, { srcImage: "url('/comic-reader/comic-viewer-arrow.png')", className: "comic-reader-icon-arrow-right", type: 'button', title: "go to next", onClick: function () { return isPBP ? panelPaginate(1) : paginate(1); } })));
}
