import React from 'react';
import { ButtonContainer } from '../containers/ButtonContainer';
export function PagesToggle(props) {
    var className = props.className, value = props.value, set = props.set;
    return (React.createElement(ButtonContainer, { srcImage: "url('/comic-reader/dc-comic-pages-button.png')", title: "pages navigation", className: "\n            ".concat(className, " \n            comic-reader-button-icon\n            ").concat(value ? "comic-reader-button-active" : "comic-reader-button-inactive", "\n          "), type: 'button', onClick: function (e) { return set(!value); } }));
}
