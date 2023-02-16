import React from 'react';
import { motion } from "framer-motion";

import { PaginationNav } from "./PaginationNav";
import { PagesToggle } from "./PagesToggle";
import { PBPToggle } from "./PBPToggle";
import { ZoomToggle } from "./ZoomToggle";
import { MinimizerToggle } from "./MinimizerToggle";
import { PageLink } from "./PageLink";

import { Logo } from "./Logo";


interface NavigationInput {
    id: string;
    isPagesOpen: boolean;
    setOpenPages: (newValue: boolean) => void;
    isPBP: boolean;
    setPBP: (newValue: boolean) => void;
    isZoomOpen: boolean;
    setZoomOpen: (newValue: boolean) => void; 
    paginate: (newDirection:number) => void;
    panelPaginate: (newPanDirection:number) => void;
    page: number;
    pageCount: number;
    isMinimizerClosed: boolean;
    setMinimizerOpen: (newValue: boolean) => void;  
}

interface NavigationLowerInput {
    id: string;
    isPagesOpen: boolean;
    setOpenPages: (newValue: boolean) => void;
    isPBP: boolean;
    setPBP: (newValue: boolean) => void;
    isMinimizerClosed: boolean; 
}
interface NavigationUpperInput {
    id: string;
    isMinimizerClosed: boolean;
    setMinimizerOpen: (newValue: boolean) => void;  
}

const variants = {
  open: { opacity: 1, left: 0 },
  closed: { opacity: 0, left: "100%" },
};

export function Navigation(props:NavigationInput) {
    const {isPagesOpen, setOpenPages, isPBP, setPBP, isZoomOpen, setZoomOpen, 
      paginate, panelPaginate, page, pageCount, isMinimizerClosed, setMinimizerOpen} = props;

    return (
      <nav className="comic-reader-nav">
        <motion.div initial={false} variants={variants}
          className="comic-reader-nav-settings"
          animate={isMinimizerClosed ? "closed" : "open"}
          transition={{
            left: { type: "spring", stiffness: 300, damping: 30},
           }}
          >
          <div className="comic-reader-nav-section comic-reader-navigation">
            <PaginationNav 
                className="comic-reader-page-navigation"
                isPBP={isPBP}
                panelPaginate={panelPaginate}  
                paginate={paginate}
                page={page}
                pageCount={pageCount}
                id="comic-reader-pagination" />
            <PagesToggle 
                className="comic-reader-page-toggle" value={isPagesOpen} set={setOpenPages} id="comic-reader-pages-toggle"/>
            <PBPToggle className="comic-reader-pbp-toggle" value={isPBP} set={setPBP} id="comic-reader-page-by-page-toggle"/>
            <ZoomToggle className="comic-reader-zoom-toggle" value={isZoomOpen} set={setZoomOpen} id="comic-reader-zoom-toggle" />
          </div>
        </motion.div>
        <div className="comic-reader-nav-section comic-reader-display-logo">
          <MinimizerToggle value={isMinimizerClosed} set={setMinimizerOpen}  className="comic-reader-minimize-toggle" id="comic-reader-nav-minimizer-toggle" />
          <Logo className="comic-reader-display-logo--item" id="comic-reader-nav-logo" />
        </div>
      </nav>
    );
}

export function NavigationMobileUpper(props:NavigationUpperInput) {
    const { isMinimizerClosed, setMinimizerOpen } = props;

    return (
      <nav className="comic-reader-nav-section comic-reader-nav--mobile-upper">
        <motion.div initial={false} variants={variants}
            className="comic-reader-nav--mobile-upper--page-link"
            animate={isMinimizerClosed ? "closed" : "open"}
            transition={{
              left: { type: "spring", stiffness: 300, damping: 30},
            }}
          >
          <PageLink className="comic-reader-page-link" id="comic-reader-nav-page-link" />
        </motion.div>
        <div className="comic-reader-minimize-toggle-upper">
          <MinimizerToggle value={isMinimizerClosed} set={setMinimizerOpen}  className="comic-reader-minimize-toggle" id="comic-reader-nav-minimizer-toggle" />
        </div>
      </nav>
    );
}

export function NavigationMobileLower(props:NavigationLowerInput) {
    const {isPagesOpen, setOpenPages, isPBP, setPBP, isMinimizerClosed  } = props;

    return (
      <motion.nav initial={false} variants={variants}
            className="comic-reader-nav-section comic-reader-nav--mobile-lower"
            animate={isMinimizerClosed ? "closed" : "open"}
            transition={{
              left: { type: "spring", stiffness: 300, damping: 30},
            }}
        >
          <PagesToggle className="comic-reader-page-toggle" value={isPagesOpen} set={setOpenPages} id="comic-reader-pagination--mobile" />
          <PBPToggle className="comic-reader-pbp-toggle" value={isPBP} set={setPBP} id="comic-reader-page-by-page-toggle--mobile" />
    </motion.nav>

    );
}