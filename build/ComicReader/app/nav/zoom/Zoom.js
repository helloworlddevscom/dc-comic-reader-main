import React from 'react';
export function Zoom(props) {
    var isZoomOpen = props.isZoomOpen;
    React.useEffect(function () {
        // add class to viewPort element
        var el = document.querySelector('.comic-reader-viewport');
        // Null check
        if (el) {
            el.classList.remove('comic-reader-no-zoom');
            el.classList.add('comic-reader-zoom-enabled');
        }
        return function () {
            // when the component unmounts
            if (el) {
                el.classList.remove('comic-reader-zoom-enabled');
                el.classList.add('comic-reader-no-zoom');
            }
        };
    }, [isZoomOpen]);
    return (React.createElement(React.Fragment, null));
}
