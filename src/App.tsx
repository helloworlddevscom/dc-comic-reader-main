import React from 'react';

import { ComicReader } from "./components/ComicReader";

// This is the folder name where all the assets reside
const folderName = "T2176800015001";
// const folderName = "T322810201";

// This is the path location for the folder
// NOTE:  This is a fetch call, so can be http location
const path = ".";

// This is the xls entries exported as a JSON
const description= "comicDetails.json";

function App() {
  return (
    <div className="comic-reader">
        <ComicReader 
          folder={`${folderName}`} 
          path={path} 
          description={description} 
        />
    </div>
  );
}

export default App;
