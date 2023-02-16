import React from 'react';
import { NavArrowContainer } from '../containers/NavArrowContainer';

interface PaginationNavInput {
    id: string;
    className: string;
    isPBP: boolean;
    paginate: (newDirection:number) => void;
    panelPaginate: (newPanDirection:number) => void;
    page: number;
    pageCount: number;
}

export function PaginationNav(props:PaginationNavInput) {
  const { paginate, page, pageCount, isPBP, panelPaginate } = props;
    return (
      <div className="comic-reader-row-flex--center">
        <NavArrowContainer 
          srcImage="url('/comic-reader/comic-viewer-arrow.png')" 
          className="comic-reader-icon-arrow-left"
          type={'button'} 
          title="go to previous"
          onClick={() => isPBP ? panelPaginate(-1) : paginate(-1)} 
        />   
        <div className="comic-reader-icon-arrow-text">{page + 1} of {pageCount}</div>
        <NavArrowContainer 
          srcImage="url('/comic-reader/comic-viewer-arrow.png')" 
          className="comic-reader-icon-arrow-right"
          type={'button'} 
          title="go to next"
          onClick={() => isPBP ? panelPaginate(1) : paginate(1)} 
        />   
      </div>
      );
}