import React from 'react';

interface TouchNavigationInput {
    id: string;
    panelPaginate:  (newPanDirection:number) => void;   
}

export function TouchNavigation(props:TouchNavigationInput) {
  const { panelPaginate} = props;

    return (
      <>
        <div 
          className="comic-reader--touch-navigation comic-reader--touch-backward"
          onClick={() => panelPaginate(-1)}
          >
        </div>
        <div 
          className="comic-reader--touch-navigation comic-reader--touch-forward"
          onClick={() => panelPaginate(1)}
          >
        </div>
      </>
    );
}