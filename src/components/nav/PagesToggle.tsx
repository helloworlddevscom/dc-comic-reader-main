import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer';
interface PagesToggleInput {
    id: string;
    className: string;
    value: boolean;
    set: (newValue: boolean) => void;
  }

export function PagesToggle(props:PagesToggleInput) {
  const {className, value, set} = props;
    return (
        <ButtonContainer 
          srcImage="url('/comic-reader/dc-comic-pages-button.png')" 
          title="pages navigation"
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