import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { PageGallery } from './PageGallery';
import { PanelView } from './PanelView';
import { PagesNavigation } from '../nav/pages/PagesNavigation';
import { ZoomNavigation } from '../nav/zoom/ZoomNavigation';
import { TouchNavigation } from '../touchNavigation/TouchNavigation';
import { Tutorial } from "../pageTutorial/Tutorial";

interface ViewPortInput {
    pages: any[];
    isPagesOpen: boolean;
    paginate: (newDirection:number) => void;
    setActivePanel: (panel:number) => void;
    panelPaginate:  (newPanDirection:number) => void;
    isMinimizerClosed: boolean;
    page: number;
    direction: number;
    isPBP: boolean;
    isZoomOpen: boolean;
    panDirection: number;
    panStep: number;
    isTutorialDone: boolean;
    setTutorialDone: (newValue: boolean) => void;
    path: string;
    // version: string;
}
/**
 * Attributing:  https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 */
function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

  // Upon panelPaninate, we get updates to these [panStep, panDirection]
  function transformedRect(currentPanel, viewPortWidth, viewPortHeight, step) {

    // These below are the same as the height/width/x/y in the JSON.  
    const xT = currentPanel.width * currentPanel.panels[step].percentX;
    const yT = currentPanel.height * currentPanel.panels[step].percentY;
    const wT = currentPanel.width * currentPanel.panels[step].percentWidth;
    const hT = currentPanel.height  * currentPanel.panels[step].percentHeight;

    const scale = Math.min((viewPortHeight/hT),(viewPortWidth/wT));

    const x = (viewPortWidth - wT * scale)/2 - xT * scale;
    const y = (viewPortHeight - hT * scale)/2 - yT * scale;
    const w = currentPanel.width * scale;

    return ({
      width: w,
      left : x ,
      top: y
    })
  }

export function ViewPort(props:ViewPortInput) {
  const {
    pages, isPagesOpen, isZoomOpen, paginate, page, direction, setActivePanel, isPBP,
    panelPaginate, panDirection, panStep, path, isMinimizerClosed, isTutorialDone, setTutorialDone } = props;

    let [rawWidth, rawHeight] = useWindowSize();

  // Height = var(--nav-button-height) + 2px (1px border)
  const NavBarHeight = isMinimizerClosed ? 0 : 50;

  // This is the browswer/total viewport size
    let height: number;
    let top: number;
    if (rawWidth > 767) {
      height = rawHeight - NavBarHeight;
      top = 0;
    } else {
      height = rawHeight - (2 * NavBarHeight);
      top = NavBarHeight;
    }

  // Each page in pages contains the panel information.   Array of objects
  const currentPanel = pages[page];

  // Setting to panStep - 1 to accomodate pages with one panel.
  // logic in panelPagingation will decide when an array length = 1, 
  // and pagingate to next page.  
  const panelRect = transformedRect(currentPanel, rawWidth, height, panStep - 1);

  const panelURLs = pages.map(e => `${path}/${e.url}`);

  // Hook for left/right arrow navigation
  // attributing:  https://usehooks.com/useKeyPress/
  function useKeyPress(): void {
    function downHandler({ key }): void {
      if ((key === "ArrowRight")) {
        isPBP ? panelPaginate(1) : paginate(1);
      }
      if (key === "ArrowLeft") {
        isPBP ? panelPaginate(-1) : paginate(-1);
      }
    }

    // Add event listeners
    React.useEffect(() => {
      window.addEventListener("keydown", downHandler);
      // Remove event listeners on cleanup
      return () => {
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
  
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

    return (
      <div 
        className="comic-reader-viewport comic-reader--scrollbar"
        style={{height: height, top: top}}
      >
        <div
            className={`
              ${isZoomOpen ? "comic-reader--page-gallery-container-zoom" : "comic-reader--page-gallery-container"}
            `}  
            style={{display: isPBP ?  "none" : ""}}
            >
          <PageGallery
            panelURLs={panelURLs}
            paginate={paginate}
            page={page}
            direction={direction}
            isPBP={isPBP}
            width={rawWidth}
            height={height}
            />
        </div>
        <div 
          className="comic-reader--page-panel-container"
          style={{display: isPBP ?  "" : "none"}}
            >
          <PanelView
            panelURLs={panelURLs}
            page={page}
            direction={direction}
            isPBP={isPBP}
            panDirection={panDirection}
            panStep={panStep}
            widthPanel={panelRect.width}
            top={panelRect.top}
            left={panelRect.left}
            />
        </div>
        <AnimatePresence>
          <motion.div 
            className="comic-reader--page-navigation-container"
            initial="closed"
            animate={isPagesOpen ? "open" : "closed"}
            variants={variants}
            exit="closed"
            transition={{ duration: 0.3 }}
            >
            <PagesNavigation 
              panelURLs={panelURLs}
              page={page}
              setActivePanel={setActivePanel}  
              id="comic-reader-pages-screen" 
            />
          </motion.div>
        </AnimatePresence>
        {isZoomOpen && <div className="comic-reader--zoom-shown-container">
          <ZoomNavigation isZoomOpen={isZoomOpen}/>
        </div>}
        {isPBP && <div className="comic-reader--touch-navigation-container">
          <TouchNavigation 
            panelPaginate={panelPaginate}
            id="comic-reader-touch-prev-next" />
        </div>}
        {(!isTutorialDone && isPBP) && <div className="comic-reader--tutorial">
          <Tutorial 
            setTutorialDone={setTutorialDone}
            id="comic-reader-tutorial-mobile"  />
        </div>}            
      </div>
    );
}