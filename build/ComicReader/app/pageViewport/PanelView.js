import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
export var PanelViewBase = function (props) {
    var panelURLs = props.panelURLs, page = props.page, direction = props.direction, widthPanel = props.widthPanel, top = props.top, left = props.left;
    var variants = {
        enter: function (direction) {
            return {
                top: top,
                left: left,
                width: widthPanel,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            opacity: 1,
            top: top,
            left: left,
            width: widthPanel,
        },
        exit: function (direction) {
            return {
                zIndex: 0,
                opacity: 0
            };
        }
    };
    // wrap within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    var imageIndex = wrap(0, panelURLs.length, page);
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimatePresence, { custom: direction },
            React.createElement(motion.img, { key: page, src: panelURLs[imageIndex], alt: "DC Comic Panel-by-Panel View Page", custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", transition: {
                    left: { type: "spring", stiffness: 300, damping: 30 },
                    top: { type: "spring", stiffness: 300, damping: 30 },
                    width: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                } }))));
};
export var PanelView = React.memo(PanelViewBase);
