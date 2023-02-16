import React from 'react';

import { Page } from './Page';
interface PagesInput {
    id: string;
    
    setActivePanel: (panel:number) => void;
    panelURLs: any[];
    page: number;
}

export function Pages(props:PagesInput) {
  const {panelURLs, page, setActivePanel} = props;

    return (
        <div
            className={`
            comic-reader--modal comic-reader--pages-container comic-reader--scrollbar
          `}
            key="page"
          >
          {panelURLs.map((panel, i) => {
            return (
              <Page
                key={i} 
                panel={panel}
                page={i}
                currentPage={page}
                setActivePanel={setActivePanel}
                alt="DC"
              />  
            )
            })
          }
        </div>
    )}

export const MemoizedPages = React.memo(Pages);
