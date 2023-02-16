import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { PageGallery } from './PageGallery';
import { PanelView } from './PanelView';
import { PagesNavigation } from '../nav/pages/PagesNavigation';
import { ZoomNavigation } from '../nav/zoom/ZoomNavigation';
import { TouchNavigation } from '../touchNavigation/TouchNavigation';
import { Tutorial } from "../pageTutorial/Tutorial";
/**
 * Attributing:  https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 */
function useWindowSize() {
    var _a = React.useState([0, 0]), size = _a[0], setSize = _a[1];
    React.useLayoutEffect(function () {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return function () { return window.removeEventListener('resize', updateSize); };
    }, []);
    return size;
}
// Upon panelPaninate, we get updates to these [panStep, panDirection]
function transformedRect(currentPanel, viewPortWidth, viewPortHeight, step) {
    // These below are the same as the height/width/x/y in the JSON.  
    var xT = currentPanel.width * currentPanel.panels[step].percentX;
    var yT = currentPanel.height * currentPanel.panels[step].percentY;
    var wT = currentPanel.width * currentPanel.panels[step].percentWidth;
    var hT = currentPanel.height * currentPanel.panels[step].percentHeight;
    var scale = Math.min((viewPortHeight / hT), (viewPortWidth / wT));
    var x = (viewPortWidth - wT * scale) / 2 - xT * scale;
    var y = (viewPortHeight - hT * scale) / 2 - yT * scale;
    var w = currentPanel.width * scale;
    return ({
        width: w,
        left: x,
        top: y
    });
}
export function ViewPort(props) {
    var pages = props.pages, isPagesOpen = props.isPagesOpen, isZoomOpen = props.isZoomOpen, paginate = props.paginate, page = props.page, direction = props.direction, setActivePanel = props.setActivePanel, isPBP = props.isPBP, panelPaginate = props.panelPaginate, panDirection = props.panDirection, panStep = props.panStep, path = props.path, isMinimizerClosed = props.isMinimizerClosed, isTutorialDone = props.isTutorialDone, setTutorialDone = props.setTutorialDone;
    var _a = useWindowSize(), rawWidth = _a[0], rawHeight = _a[1];
    // Height = var(--nav-button-height) + 2px (1px border)
    var NavBarHeight = isMinimizerClosed ? 0 : 50;
    // This is the browswer/total viewport size
    var height;
    var top;
    if (rawWidth > 767) {
        height = rawHeight - NavBarHeight;
        top = 0;
    }
    else {
        height = rawHeight - (2 * NavBarHeight);
        top = NavBarHeight;
    }
    // Each page in pages contains the panel information.   Array of objects
    var currentPanel = pages[page];
    // Setting to panStep - 1 to accomodate pages with one panel.
    // logic in panelPagingation will decide when an array length = 1, 
    // and pagingate to next page.  
    var panelRect = transformedRect(currentPanel, rawWidth, height, panStep - 1);
    var panelURLs = pages.map(function (e) { return "".concat(path, "/").concat(e.url); });
    // Hook for left/right arrow navigation
    // attributing:  https://usehooks.com/useKeyPress/
    function useKeyPress() {
        function downHandler(_a) {
            var key = _a.key;
            if ((key === "ArrowRight")) {
                isPBP ? panelPaginate(1) : paginate(1);
            }
            if (key === "ArrowLeft") {
                isPBP ? panelPaginate(-1) : paginate(-1);
            }
        }
        // Add event listeners
        React.useEffect(function () {
            window.addEventListener("keydown", downHandler);
            // Remove event listeners on cleanup
            return function () {
                window.removeEventListener("keydown", downHandler);
            };
            // Unclear on when useEffect isn't recognizing props
            // need to re-render if paginate function state changes
            // Possible refactor to only pass result (+1 or -1) as 
            // local state value to still trigger re-render on change
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [paginate, panelPaginate, isPBP]);
    }
    // Instantiate pressKey function
    useKeyPress();
    var variants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };
    return (React.createElement("div", { className: "comic-reader-viewport comic-reader--scrollbar", style: { height: height, top: top } },
        React.createElement("div", { className: "\n              ".concat(isZoomOpen ? "comic-reader--page-gallery-container-zoom" : "comic-reader--page-gallery-container", "\n            "), style: { display: isPBP ? "none" : "" } },
            React.createElement(PageGallery, { panelURLs: panelURLs, paginate: paginate, page: page, direction: direction, isPBP: isPBP, width: rawWidth, height: height })),
        React.createElement("div", { className: "comic-reader--page-panel-container", style: { display: isPBP ? "" : "none" } },
            React.createElement(PanelView, { panelURLs: panelURLs, page: page, direction: direction, isPBP: isPBP, panDirection: panDirection, panStep: panStep, widthPanel: panelRect.width, top: panelRect.top, left: panelRect.left })),
        React.createElement(AnimatePresence, null,
            React.createElement(motion.div, { className: "comic-reader--page-navigation-container", initial: "closed", animate: isPagesOpen ? "open" : "closed", variants: variants, exit: "closed", transition: { duration: 0.3 } },
                React.createElement(PagesNavigation, { panelURLs: panelURLs, page: page, setActivePanel: setActivePanel, id: "comic-reader-pages-screen" }))),
        isZoomOpen && React.createElement("div", { className: "comic-reader--zoom-shown-container" },
            React.createElement(ZoomNavigation, { isZoomOpen: isZoomOpen })),
        isPBP && React.createElement("div", { className: "comic-reader--touch-navigation-container" },
            React.createElement(TouchNavigation, { panelPaginate: panelPaginate, id: "comic-reader-touch-prev-next" })),
        (!isTutorialDone && isPBP) && React.createElement("div", { className: "comic-reader--tutorial" },
            React.createElement(Tutorial, { setTutorialDone: setTutorialDone, id: "comic-reader-tutorial-mobile" }))));
}
