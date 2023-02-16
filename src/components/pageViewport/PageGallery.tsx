import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

interface PageGalleryInput {
    panelURLs: any[];
    paginate: (newDirection:number) => void;
    page: number;
    direction: number;
    isPBP: boolean;
    width: number;
    height: number;    
}

const variants = {
  enter: (direction: number) => {
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
  exit: (direction: number) => {
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
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const PageGalleryBase = (props:PageGalleryInput) => {
 const { panelURLs, paginate, page, direction} = props;

  // wrap within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, panelURLs.length, page);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={panelURLs[imageIndex]}
          custom={direction}
          variants={variants}
          alt="DC Comic Gallery View Page"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </>
  );
};

export const PageGallery = React.memo(PageGalleryBase);
