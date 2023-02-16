import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer'

interface ZoomToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;    
}

export function ZoomToggle(props:ZoomToggleInput) {
  const {className, value, set} = props;
    return (
        <ButtonContainer 
          srcImage="url('/comic-reader/dc-comic-zoom-button.png')"
          title="zoom image" 
          className={`
            ${className} 
            comic-reader-button-icon
            ${value ? "comic-reader-button-active" : "comic-reader-button-inactive"}
          `}          
          type={'button'} 
          onClick={(e) => set(!value)} 
        />    
      );
}