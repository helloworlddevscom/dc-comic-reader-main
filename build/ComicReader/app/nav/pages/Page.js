import React from 'react';
export function Page(props) {
    var page = props.page, panel = props.panel, currentPage = props.currentPage, setActivePanel = props.setActivePanel;
    var placeholder = "/comic-reader/dc-comic-viewer-logo.png";
    var _a = React.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = React.useState(placeholder), currentSrc = _b[0], updateSrc = _b[1];
    React.useEffect(function () {
        // start loading original image
        var imageToLoad = new Image();
        imageToLoad.src = panel;
        imageToLoad.onload = function () {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(panel);
        };
    }, [panel, page]);
    return (React.createElement("div", { className: "comic-reader--pages", onClick: function () { return setActivePanel(page); } },
        React.createElement("img", { className: "\n            ".concat(((currentPage === page) || loading) ? "" : "comic-reader--pages-overlay", "\n          "), key: page, src: currentSrc, alt: "DC Comic Navigation Page", style: {
                opacity: loading ? 0.5 : 1,
                transition: "opacity .15s linear"
            } }),
        React.createElement("div", null, page + 1)));
}
