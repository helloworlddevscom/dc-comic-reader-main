import React from 'react';
import LocalData from "./systems/localStorage/LocalData";
import { checkInit } from './systems/helpers';
import { ViewPort } from "./pageViewport/ViewPort";
import { Navigation, NavigationMobileLower, NavigationMobileUpper } from "./nav/Navigation";
import { Loading } from "./pageLoading/Loading";
var dataConfigs = {
    isPBP: {
        init: false,
    },
    isZoomOpen: {
        init: false,
    },
    isPagesOpen: {
        init: false,
    },
    isTutorialDone: {
        init: false,
    },
};
export function ComicReaderApp(props) {
    var pages = props.pages, path = props.path;
    var localData = LocalData.getInstance();
    var _a = React.useState(false), isLoaded = _a[0], setIsLoaded = _a[1];
    var _b = React.useState(false), isMinimizerClosed = _b[0], setMinimizerOpen = _b[1];
    // Local Storage/Button Initialization:   Check if localStorage value exists.  If not, set it.
    var isPBPInit = checkInit(localData, dataConfigs["isPBP"].init, "isPBP");
    var _c = React.useState(isPBPInit), isPBP = _c[0], setPBP = _c[1];
    var isPagesOpenInit = checkInit(localData, dataConfigs["isPagesOpen"].init, "isPagesOpen");
    var _d = React.useState(isPagesOpenInit), isPagesOpen = _d[0], setOpenPages = _d[1];
    var isZoomOpenInit = checkInit(localData, dataConfigs["isZoomOpen"].init, "isZoomOpen");
    var _e = React.useState(isZoomOpenInit), isZoomOpen = _e[0], setZoomOpen = _e[1];
    var isTutorialDoneInit = checkInit(localData, dataConfigs["isTutorialDone"].init, "isTutorialDone");
    var _f = React.useState(isTutorialDoneInit), isTutorialDone = _f[0], setTutorialDone = _f[1];
    React.useEffect(function () {
        // Future: wrap in try/catch incase user has selected "save no data" in browswer
        // Toggle state instead of resetting after each action
        // and local storage is disabled
        if (isPBP) {
            setOpenPages(false);
            setZoomOpen(false);
            setPanDirecton([1, 0]);
        }
        if (isPagesOpen) {
            setPBP(false);
            setZoomOpen(false);
            setPanDirecton([1, 0]);
        }
        if (isZoomOpen) {
            setOpenPages(false);
            setPBP(false);
            setPanDirecton([1, 0]);
        }
        localData.setObjectData("isPBP", isPBP);
        localData.setObjectData("isTutorialDone", isTutorialDone);
    }, [isTutorialDone, isPBP, isPagesOpen, isZoomOpen, localData]);
    // Disable overflow... except when enabling zoom mode
    React.useEffect(function () {
        document.body.classList.add('comic-reader-no-zoom');
        // add class to viewPort element
        var el = document.querySelector('.comic-reader-viewport');
        // Null check
        if (el) {
            el.classList.add('comic-reader-no-zoom');
        }
        return function () {
            // when the component unmounts
            document.body.classList.remove('comic-reader-no-zoom');
            if (el) {
                el.classList.remove('comic-reader-zoom-enabled');
            }
        };
    }, []);
    // Page Gallery/Navigation Logic
    var _g = React.useState([0, 0]), _h = _g[0], page = _h[0], direction = _h[1], setPage = _g[1];
    // Setting default panStep to 1 to accomodate for pages with only 1 panel
    // panelPagination logic will translate.  
    var _j = React.useState([1, 0]), _k = _j[0], panStep = _k[0], panDirection = _k[1], setPanDirecton = _j[1];
    // Total number of pages in Comic
    var pageCount = pages.length;
    // Function in carousel to jump to new page.
    // Also, when end of panel-by-panel for current page, switcth to new page
    // Update:  Pre-cache 5 pages (total).   Can be 0-4 on intiail load
    // can be -2/+2 if using relative page location.  2.0 update to save 
    // "continue where I left off feature"
    var setActivePanel = function (panel) {
        setPage([panel, 0]);
    };
    // Page mode
    var paginate = function (newDirection) {
        var nextPage = page + newDirection;
        if ((nextPage >= 0) && (nextPage <= pageCount - 1)) {
            setPage([nextPage, newDirection]);
        }
    };
    // Panel by Panel (PBP) mode logic
    var panelPaginate = function (newPanDirection) {
        // Find panels in current page
        var currentPanels = pages[page].panels;
        // Find length of panels
        var currentPanelsLength = currentPanels.length;
        var nextStep = panStep + newPanDirection;
        if ((page >= 0) && (page <= pageCount - 1)) {
            // Forward Direction
            if ((nextStep) > currentPanelsLength) {
                nextStep = 1;
                setPanDirecton([nextStep, newPanDirection]);
                paginate(1);
                // Backward Direction
            }
            else if (nextStep < 1) {
                nextStep = 1;
                setPanDirecton([nextStep, newPanDirection]);
                paginate(-1);
            }
            else {
                setPanDirecton([nextStep, newPanDirection]);
            }
        }
    };
    // Check if pages are avaialbe before render
    React.useEffect(function () {
        if (pages.length > 0) {
            setIsLoaded(true);
        }
    }, [pages]);
    if (!isLoaded) {
        return React.createElement(Loading, { className: "comic-reader-loading" });
    }
    else {
        return (React.createElement("div", { className: "comic-reader-wrapper" },
            React.createElement(NavigationMobileUpper, { isMinimizerClosed: isMinimizerClosed, setMinimizerOpen: setMinimizerOpen, id: "comic-reader-navigation-component--upper" }),
            React.createElement(ViewPort, { pages: pages, isPagesOpen: isPagesOpen, isTutorialDone: isTutorialDone, setTutorialDone: setTutorialDone, isZoomOpen: isZoomOpen, paginate: paginate, panelPaginate: panelPaginate, setActivePanel: setActivePanel, isMinimizerClosed: isMinimizerClosed, page: page, direction: direction, isPBP: isPBP, panDirection: panDirection, panStep: panStep, path: path }),
            React.createElement(Navigation, { isPagesOpen: isPagesOpen, setOpenPages: setOpenPages, isPBP: isPBP, setPBP: setPBP, isZoomOpen: isZoomOpen, setZoomOpen: setZoomOpen, isMinimizerClosed: isMinimizerClosed, setMinimizerOpen: setMinimizerOpen, paginate: paginate, panelPaginate: panelPaginate, page: page, pageCount: pageCount, id: "comic-reader-navigation-component" }),
            React.createElement(NavigationMobileLower, { isMinimizerClosed: isMinimizerClosed, isPagesOpen: isPagesOpen, setOpenPages: setOpenPages, isPBP: isPBP, setPBP: setPBP, id: "comic-reader-navigation-component--lower" })));
    }
}
