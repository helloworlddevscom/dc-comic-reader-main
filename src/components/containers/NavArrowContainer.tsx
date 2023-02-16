import React from 'react';

interface NavArrowInput {
    type: 'button';
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}

export const NavArrowContainer = ({ type = 'button', onClick, className, srcImage, title }:NavArrowInput) => {
  return (
    <button title={title} className="comic-reader-navarrow" type={type} onClick={onClick}>
      <div className={className}
        style={{backgroundImage: `${srcImage}`}}>
      </div>
    </button>
  );
};
