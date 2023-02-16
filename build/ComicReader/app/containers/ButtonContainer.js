import React from 'react';
export var ButtonContainer = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, onClick = _a.onClick, className = _a.className, srcImage = _a.srcImage, _c = _a.title, title = _c === void 0 ? 'navigation button' : _c;
    return (React.createElement("button", { title: title, className: "comic-reader-button", type: type, onClick: onClick },
        React.createElement("div", { className: className, style: { backgroundImage: "".concat(srcImage) } })));
};
