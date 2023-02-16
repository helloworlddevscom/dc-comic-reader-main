import React from 'react';
import { LogoContainer } from '../containers/LogoContainer';
export function Logo(props) {
    var className = props.className;
    return (React.createElement("div", { className: "comic-reader-display-logo--container" },
        React.createElement(LogoContainer, { srcImage: "url('/comic-reader/dc-palm-logo.svg')", className: className })));
}
