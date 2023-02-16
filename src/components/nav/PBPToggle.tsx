import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer'
interface PBPToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}

export function PBPToggle(props:PBPToggleInput) {
  const {className, value, set} = props;
    return (
        <ButtonContainer 
          srcImage="url('/comic-reader/dc-comic-panel-by-panel.png')" 
          title="panel by panel"
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