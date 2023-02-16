import React from 'react';
import { Zoom } from "./Zoom";

interface ZoomNavigationInput {
    isZoomOpen: boolean;
}

export function ZoomNavigation(props:ZoomNavigationInput) {
  const { isZoomOpen } = props;
    return (
        <Zoom isZoomOpen={isZoomOpen}/>
    );
}