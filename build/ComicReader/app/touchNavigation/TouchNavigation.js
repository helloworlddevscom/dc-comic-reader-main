import React from 'react';
export function TouchNavigation(props) {
    var panelPaginate = props.panelPaginate;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "comic-reader--touch-navigation comic-reader--touch-backward", onClick: function () { return panelPaginate(-1); } }),
        React.createElement("div", { className: "comic-reader--touch-navigation comic-reader--touch-forward", onClick: function () { return panelPaginate(1); } })));
}
