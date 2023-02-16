import React from 'react';

interface MinimizerInput {
    type: 'button';
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}

export const MinimizerContainer = ({ type = 'button', onClick, className, srcImage, title = 'navigation button' }:MinimizerInput) => {
  return (
    <button title={title} className="comic-reader-minimizer" type={type} onClick={onClick}>
      <div className={className}
        style={{backgroundImage: `${srcImage}`}}>
      </div>
    </button>
  );
};
