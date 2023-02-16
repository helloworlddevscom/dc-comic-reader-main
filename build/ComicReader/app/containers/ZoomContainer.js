import React from 'react';
export var ZoomContainer = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, onClick = _a.onClick, className = _a.className, srcImage = _a.srcImage;
    return (React.createElement("button", { className: "comic-reader-zoom", type: type, onClick: onClick },
        React.createElement("div", { className: className, style: { backgroundImage: "".concat(srcImage) } })));
};
