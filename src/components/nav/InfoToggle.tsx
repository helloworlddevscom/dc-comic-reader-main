import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer'
interface InfoToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
}

export function InfoToggle(props:InfoToggleInput) {
  const {className, value, set} = props;
    return (
        <ButtonContainer 
          srcImage="url('/comic-reader/dc-comic-info-button.png')" 
          title="toggle comic information"
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