import React from 'react';
import { MinimizerContainer } from '../containers/MinimizerContainer';
export function MinimizerToggle(props) {
    var className = props.className, value = props.value, set = props.set;
    return (React.createElement(MinimizerContainer, { srcImage: "url('/comic-reader/comic-viewer-arrow.png')", title: "full screen", className: "\n            ".concat(className, " \n            ").concat(value ? "comic-reader-minimizer-open" : "comic-reader-minimizer-closed", "\n          "), type: 'button', onClick: function (e) { return set(!value); } }));
}
