import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
var variants = {
    enter: function (direction) {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: function (direction) {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};
/**
 * Attributing:  https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
 * Framer library developers:
 */
var swipeConfidenceThreshold = 10000;
var swipePower = function (offset, velocity) {
    return Math.abs(offset) * velocity;
};
export var PageGalleryBase = function (props) {
    var panelURLs = props.panelURLs, paginate = props.paginate, page = props.page, direction = props.direction;
    // wrap within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    var imageIndex = wrap(0, panelURLs.length, page);
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimatePresence, { initial: false, custom: direction },
            React.createElement(motion.img, { key: page, src: panelURLs[imageIndex], custom: direction, variants: variants, alt: "DC Comic Gallery View Page", initial: "enter", animate: "center", exit: "exit", transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }, drag: "x", dragConstraints: { left: 0, right: 0 }, dragElastic: 1, onDragEnd: function (e, _a) {
                    var offset = _a.offset, velocity = _a.velocity;
                    var swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    }
                    else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                } }))));
};
export var PageGallery = React.memo(PageGalleryBase);
