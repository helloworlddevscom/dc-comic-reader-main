import React from 'react';

interface buttonInput {
    type: 'button';
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    srcImage: string;
    title: string;
}

export const ButtonContainer = ({ type = 'button', onClick, className, srcImage, title = 'navigation button'}:buttonInput) => {
  return (
    <button title={title} className="comic-reader-button" type={type} onClick={onClick}>
      <div className={className}
        style={{backgroundImage: `${srcImage}`}}>
      </div>
    </button>
  );
};
