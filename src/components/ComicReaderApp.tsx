import React from 'react';

import LocalData from "./systems/localStorage/LocalData";
import { checkInit } from './systems/helpers';

import { ViewPort } from "./pageViewport/ViewPort"
import { Navigation, NavigationMobileLower, NavigationMobileUpper } from "./nav/Navigation"

import { Loading } from "./pageLoading/Loading"

interface AppInput {
    pages: any[];
    id: string;
    path: string;
    // version: string;
    // description: any;
}

const dataConfigs = {
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


export function ComicReaderApp(props:AppInput) {
  const {pages, path} = props;
  let localData = LocalData.getInstance();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isMinimizerClosed, setMinimizerOpen] = React.useState(false);

  // Local Storage/Button Initialization:   Check if localStorage value exists.  If not, set it.
  const isPBPInit = checkInit(localData, dataConfigs["isPBP"].init, "isPBP");
  const [isPBP, setPBP] = React.useState(isPBPInit);

  const isPagesOpenInit = checkInit(localData, dataConfigs["isPagesOpen"].init, "isPagesOpen");
  const [isPagesOpen, setOpenPages] = React.useState(isPagesOpenInit);

  const isZoomOpenInit = checkInit(localData, dataConfigs["isZoomOpen"].init, "isZoomOpen");
  const [isZoomOpen, setZoomOpen] = React.useState(isZoomOpenInit);

  const isTutorialDoneInit = checkInit(localData, dataConfigs["isTutorialDone"].init, "isTutorialDone");
  const [isTutorialDone, setTutorialDone] = React.useState(isTutorialDoneInit);

  React.useEffect(() => {
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

    localData.setObjectData("isPBP", isPBP );
    localData.setObjectData("isTutorialDone", isTutorialDone )
  }, [isTutorialDone ,isPBP, isPagesOpen, isZoomOpen, localData])

  // Disable overflow... except when enabling zoom mode
   React.useEffect(() => {
    document.body.classList.add('comic-reader-no-zoom');
    // add class to viewPort element
    const el = document.querySelector('.comic-reader-viewport')
    // Null check
    if (el) {
      el.classList.add('comic-reader-no-zoom');
    }

    return () => {
      // when the component unmounts
      document.body.classList.remove('comic-reader-no-zoom');
      if (el) {
        el.classList.remove('comic-reader-zoom-enabled');
      }
    }

   }, []);

  // Page Gallery/Navigation Logic
  const [[page, direction], setPage] = React.useState([0, 0]);
  // Setting default panStep to 1 to accomodate for pages with only 1 panel
  // panelPagination logic will translate.  
  const [[panStep, panDirection], setPanDirecton] = React.useState([1, 0]);

  // Total number of pages in Comic
  const pageCount = pages.length;

  // Function in carousel to jump to new page.
  // Also, when end of panel-by-panel for current page, switcth to new page
  // Update:  Pre-cache 5 pages (total).   Can be 0-4 on intiail load
  // can be -2/+2 if using relative page location.  2.0 update to save 
  // "continue where I left off feature"
  const setActivePanel = (panel: number) => {
      setPage([panel, 0]);
  };

  // Page mode
  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;
    if ((nextPage >= 0) && (nextPage <= pageCount - 1)) { 
      setPage([nextPage, newDirection]);
    }
  }

  // Panel by Panel (PBP) mode logic
  const panelPaginate = (newPanDirection: number) => {
    // Find panels in current page
    const currentPanels = pages[page].panels;

    // Find length of panels
    const currentPanelsLength = currentPanels.length;
    let nextStep = panStep + newPanDirection;

    if ((page >= 0) && (page <= pageCount - 1)) { 
      // Forward Direction
      if ((nextStep) > currentPanelsLength) {
       nextStep = 1;
        setPanDirecton([nextStep, newPanDirection]);
        paginate(1);

      // Backward Direction
      } else if (nextStep < 1 ) {
        nextStep = 1;
        setPanDirecton([nextStep, newPanDirection]);
        paginate(-1);

      } else {
        setPanDirecton([nextStep, newPanDirection]);
      }
    }
  }

  // Check if pages are avaialbe before render
  React.useEffect(() => {
    if (pages.length > 0) {
      setIsLoaded(true);
    }
  }, [pages]);

if (!isLoaded) {
    return <Loading className="comic-reader-loading"/>;
  } else {
    return (
      <div className="comic-reader-wrapper">
        <NavigationMobileUpper 
          isMinimizerClosed={isMinimizerClosed} setMinimizerOpen={setMinimizerOpen}
          id="comic-reader-navigation-component--upper" />
        <ViewPort 
          pages={pages} 
          isPagesOpen={isPagesOpen} 
          isTutorialDone={isTutorialDone} 
          setTutorialDone={setTutorialDone}
          isZoomOpen={isZoomOpen}
          paginate={paginate}
          panelPaginate={panelPaginate}
          setActivePanel={setActivePanel}
          isMinimizerClosed={isMinimizerClosed}
          page={page}
          direction={direction}
          isPBP={isPBP}
          panDirection={panDirection}
          panStep={panStep}
          path={path}
          // version={version} 
          // description={description}
        />
        <Navigation 
          isPagesOpen={isPagesOpen} setOpenPages={setOpenPages} 
          isPBP={isPBP} setPBP={setPBP}
          isZoomOpen={isZoomOpen} setZoomOpen={setZoomOpen}
          isMinimizerClosed={isMinimizerClosed} setMinimizerOpen={setMinimizerOpen}
          paginate={paginate}
          panelPaginate={panelPaginate}
          page={page}
          pageCount={pageCount}
          id="comic-reader-navigation-component"  />
        <NavigationMobileLower
          isMinimizerClosed={isMinimizerClosed} 
          isPagesOpen={isPagesOpen} setOpenPages={setOpenPages} 
          isPBP={isPBP} setPBP={setPBP}
          id="comic-reader-navigation-component--lower" />
       </div>
    );
  }
}