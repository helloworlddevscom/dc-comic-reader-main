import React from 'react';
import { LoadingContainer } from '../containers/LoadingContainer';
interface LoadingInput {
      className: string;
}

export function Loading(props:LoadingInput) {
  const {className} = props;
    return (
      <div className={className}>
        <div>Loading</div>
        <LoadingContainer 
          srcImage="url('/comic-reader/spinner.gif')" 
        />
      </div>
    );
}