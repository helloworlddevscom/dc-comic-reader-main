import React from 'react';

interface ZoomInput {
    isZoomOpen: boolean;
}

export function Zoom(props:ZoomInput) {
  const {isZoomOpen} = props;

  React.useEffect(() => {
  // add class to viewPort element
  const el = document.querySelector('.comic-reader-viewport')
  // Null check
  if (el) {
    el.classList.remove('comic-reader-no-zoom');
    el.classList.add('comic-reader-zoom-enabled');
  }
  return () => {
      // when the component unmounts
      if (el) {
        el.classList.remove('comic-reader-zoom-enabled');
        el.classList.add('comic-reader-no-zoom');
      }
    }
  }, [isZoomOpen]);

     return (
      <></>
    );
}