import React from 'react';
import { Zoom } from "./Zoom";
export function ZoomNavigation(props) {
    var isZoomOpen = props.isZoomOpen;
    return (React.createElement(Zoom, { isZoomOpen: isZoomOpen }));
}
