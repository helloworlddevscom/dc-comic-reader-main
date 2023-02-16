import React from 'react';
 
interface TutorialInput {
    id: string;
    setTutorialDone: (newValue: boolean) => void;
}

export function Tutorial(props:TutorialInput) {
  const {setTutorialDone} = props;
  const srcImage = "/comic-reader/comic-viewer-mobile-tutor.png" 
    return (
      <div className="comic-reader--tutorial-container">
        <div className="comic-reader--tutorial-container-content">
          <h2 className="comic-reader--tutorial-message"> 
            Tap the left or right side of the screen to navigate
          </h2>
          <div className="comic-reader--tutorial-container-image">
            <img alt="Navigation Tutorial.  Left or Right Arrows"
              className="comic-reader--tutorial-image"
              src={srcImage} /> 
          </div>
          <div>
            <button className="comic-reader--tutorial-button" 
              type="button"
              onClick={() =>setTutorialDone(true)}>
              OKAY, GOT IT
            </button>
          </div>
        </div>
      </div>
    );
}