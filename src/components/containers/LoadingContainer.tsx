import React from 'react';

interface loadingInput {
    srcImage: string;
}

export const LoadingContainer = ({ srcImage }:loadingInput) => {
  return (
      <div
        className="comic-reader-loading-spinner"
        style={{backgroundImage: `${srcImage}`}}>
      </div>
  );
};
