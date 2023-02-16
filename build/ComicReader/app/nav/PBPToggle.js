import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer';
export function PBPToggle(props) {
    var className = props.className, value = props.value, set = props.set;
    return (React.createElement(ButtonContainer, { srcImage: "url('/comic-reader/dc-comic-panel-by-panel.png')", title: "panel by panel", className: "\n            ".concat(className, " \n            comic-reader-button-icon\n            ").concat(value ? "comic-reader-button-active" : "comic-reader-button-inactive", "\n          "), type: 'button', onClick: function (e) { return set(!value); } }));
}
