import React from 'react';
import { LoadingContainer } from '../containers/LoadingContainer';
export function Loading(props) {
    var className = props.className;
    return (React.createElement("div", { className: className },
        React.createElement("div", null, "Loading"),
        React.createElement(LoadingContainer, { srcImage: "url('/comic-reader/spinner.gif')" })));
}
