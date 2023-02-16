import React from 'react';
import { MinimizerContainer } from '../containers/MinimizerContainer';
interface MinimizerToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}

export function MinimizerToggle(props:MinimizerToggleInput) {
  const {className, value, set} = props;
    return (
        <MinimizerContainer 
          srcImage="url('/comic-reader/comic-viewer-arrow.png')" 
          title="full screen"
          className={`
            ${className} 
            ${value ? "comic-reader-minimizer-open" : "comic-reader-minimizer-closed"}
          `}
          type={'button'} 
          onClick={(e) => set(!value)} 
        />    
    );
}