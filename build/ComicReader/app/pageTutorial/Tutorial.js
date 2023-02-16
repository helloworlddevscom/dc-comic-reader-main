import React from 'react';
export function Tutorial(props) {
    var setTutorialDone = props.setTutorialDone;
    var srcImage = "/comic-reader/comic-viewer-mobile-tutor.png";
    return (React.createElement("div", { className: "comic-reader--tutorial-container" },
        React.createElement("div", { className: "comic-reader--tutorial-container-content" },
            React.createElement("h2", { className: "comic-reader--tutorial-message" }, "Tap the left or right side of the screen to navigate"),
            React.createElement("div", { className: "comic-reader--tutorial-container-image" },
                React.createElement("img", { alt: "Navigation Tutorial.  Left or Right Arrows", className: "comic-reader--tutorial-image", src: srcImage })),
            React.createElement("div", null,
                React.createElement("button", { className: "comic-reader--tutorial-button", type: "button", onClick: function () { return setTutorialDone(true); } }, "OKAY, GOT IT")))));
}
