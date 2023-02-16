import React from 'react';
import { LogoContainer } from '../containers/LogoContainer';
interface LogoInput {
    id: string; 
    className: string;
}

export function Logo(props:LogoInput) {
  const {className} = props;
    return (
      <div className="comic-reader-display-logo--container">
        <LogoContainer 
          srcImage="url('/comic-reader/dc-palm-logo.svg')" 
          className={className}
        />
      </div>
    );
}