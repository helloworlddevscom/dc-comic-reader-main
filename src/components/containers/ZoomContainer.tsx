import React from 'react';

interface ZoomInput {
    type: 'button';
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
}

export const ZoomContainer = ({ type = 'button', onClick, className, srcImage }:ZoomInput) => {
  return (
    <button className="comic-reader-zoom" type={type} onClick={onClick}>
      <div className={className}
        style={{backgroundImage: `${srcImage}`}}>
      </div>
    </button>
  );
};
