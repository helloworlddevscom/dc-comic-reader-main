import React, { useState, useEffect } from 'react';
export var ImageLoad = React.memo(function (_a) {
    var src = _a.src, placeholder = _a.placeholder, _b = _a.alt, alt = _b === void 0 ? "" : _b;
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var _d = useState(placeholder), currentSrc = _d[0], updateSrc = _d[1];
    useEffect(function () {
        // start loading original image
        var imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = function () {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        };
    }, [src]);
    return (React.createElement("img", { src: currentSrc, style: {
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
        }, alt: alt }));
});
