import React from 'react';
export var NavArrowContainer = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, onClick = _a.onClick, className = _a.className, srcImage = _a.srcImage, title = _a.title;
    return (React.createElement("button", { title: title, className: "comic-reader-navarrow", type: type, onClick: onClick },
        React.createElement("div", { className: className, style: { backgroundImage: "".concat(srcImage) } })));
};
