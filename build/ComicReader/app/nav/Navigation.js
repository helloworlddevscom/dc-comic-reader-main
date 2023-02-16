import React from 'react';
import { motion } from "framer-motion";
import { PaginationNav } from "./PaginationNav";
import { PagesToggle } from "./PagesToggle";
import { PBPToggle } from "./PBPToggle";
import { ZoomToggle } from "./ZoomToggle";
import { MinimizerToggle } from "./MinimizerToggle";
import { PageLink } from "./PageLink";
import { Logo } from "./Logo";
var variants = {
    open: { opacity: 1, left: 0 },
    closed: { opacity: 0, left: "100%" },
};
export function Navigation(props) {
    var isPagesOpen = props.isPagesOpen, setOpenPages = props.setOpenPages, isPBP = props.isPBP, setPBP = props.setPBP, isZoomOpen = props.isZoomOpen, setZoomOpen = props.setZoomOpen, paginate = props.paginate, panelPaginate = props.panelPaginate, page = props.page, pageCount = props.pageCount, isMinimizerClosed = props.isMinimizerClosed, setMinimizerOpen = props.setMinimizerOpen;
    return (React.createElement("nav", { className: "comic-reader-nav" },
        React.createElement(motion.div, { initial: false, variants: variants, className: "comic-reader-nav-settings", animate: isMinimizerClosed ? "closed" : "open", transition: {
                left: { type: "spring", stiffness: 300, damping: 30 },
            } },
            React.createElement("div", { className: "comic-reader-nav-section comic-reader-navigation" },
                React.createElement(PaginationNav, { className: "comic-reader-page-navigation", isPBP: isPBP, panelPaginate: panelPaginate, paginate: paginate, page: page, pageCount: pageCount, id: "comic-reader-pagination" }),
                React.createElement(PagesToggle, { className: "comic-reader-page-toggle", value: isPagesOpen, set: setOpenPages, id: "comic-reader-pages-toggle" }),
                React.createElement(PBPToggle, { className: "comic-reader-pbp-toggle", value: isPBP, set: setPBP, id: "comic-reader-page-by-page-toggle" }),
                React.createElement(ZoomToggle, { className: "comic-reader-zoom-toggle", value: isZoomOpen, set: setZoomOpen, id: "comic-reader-zoom-toggle" }))),
        React.createElement("div", { className: "comic-reader-nav-section comic-reader-display-logo" },
            React.createElement(MinimizerToggle, { value: isMinimizerClosed, set: setMinimizerOpen, className: "comic-reader-minimize-toggle", id: "comic-reader-nav-minimizer-toggle" }),
            React.createElement(Logo, { className: "comic-reader-display-logo--item", id: "comic-reader-nav-logo" }))));
}
export function NavigationMobileUpper(props) {
    var isMinimizerClosed = props.isMinimizerClosed, setMinimizerOpen = props.setMinimizerOpen;
    return (React.createElement("nav", { className: "comic-reader-nav-section comic-reader-nav--mobile-upper" },
        React.createElement(motion.div, { initial: false, variants: variants, className: "comic-reader-nav--mobile-upper--page-link", animate: isMinimizerClosed ? "closed" : "open", transition: {
                left: { type: "spring", stiffness: 300, damping: 30 },
            } },
            React.createElement(PageLink, { className: "comic-reader-page-link", id: "comic-reader-nav-page-link" })),
        React.createElement("div", { className: "comic-reader-minimize-toggle-upper" },
            React.createElement(MinimizerToggle, { value: isMinimizerClosed, set: setMinimizerOpen, className: "comic-reader-minimize-toggle", id: "comic-reader-nav-minimizer-toggle" }))));
}
export function NavigationMobileLower(props) {
    var isPagesOpen = props.isPagesOpen, setOpenPages = props.setOpenPages, isPBP = props.isPBP, setPBP = props.setPBP, isMinimizerClosed = props.isMinimizerClosed;
    return (React.createElement(motion.nav, { initial: false, variants: variants, className: "comic-reader-nav-section comic-reader-nav--mobile-lower", animate: isMinimizerClosed ? "closed" : "open", transition: {
            left: { type: "spring", stiffness: 300, damping: 30 },
        } },
        React.createElement(PagesToggle, { className: "comic-reader-page-toggle", value: isPagesOpen, set: setOpenPages, id: "comic-reader-pagination--mobile" }),
        React.createElement(PBPToggle, { className: "comic-reader-pbp-toggle", value: isPBP, set: setPBP, id: "comic-reader-page-by-page-toggle--mobile" })));
}
