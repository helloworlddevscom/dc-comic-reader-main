import React from 'react';

interface PageInput {
    currentPage: number;
    panel: any;
    page: number;
    alt: string;
    setActivePanel: (panel:number) => void;
  }

export function Page(props:PageInput) {
  const { page, panel, currentPage, setActivePanel } = props;

  const placeholder = "/comic-reader/dc-comic-viewer-logo.png" 

  const [loading, setLoading] = React.useState(true);
  const [currentSrc, updateSrc] = React.useState(placeholder);

  React.useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = panel;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(panel);
    }; 
  }, [panel, page])

    return (
      <div className="comic-reader--pages"
        onClick={() => setActivePanel(page)}>
        <img
          className={`
            ${((currentPage === page) || loading) ? "" : "comic-reader--pages-overlay" }
          `}
          key={page}
          src={currentSrc}
          alt="DC Comic Navigation Page"
          style={{
            opacity: loading ? 0.5 : 1,
            transition: "opacity .15s linear"
          }}
        />
        <div>{page + 1}</div>
      </div>   
    );
}