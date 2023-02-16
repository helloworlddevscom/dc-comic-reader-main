import React from 'react';

interface logoInput {
    className: string;
    srcImage: string;
}

export const LogoContainer = ({ className, srcImage }:logoInput) => {
  return (
    // anchor link can go here
      <div className={className}
        style={{backgroundImage: `${srcImage}`}}>
      </div>
    // 
  );
};
