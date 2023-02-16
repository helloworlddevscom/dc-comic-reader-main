import React from 'react';
import '../components/ComicReaderApp.scss';
import '../components/containers/ButtonContainer.scss';  
import '../components/containers/NavArrowContainer.scss';
import '../components/containers/MinimizerContainer.scss';
import '../components/containers/LoadingContainer.scss';
import '../components/containers/ZoomContainer.scss';
import '../components/nav/Logo.css';
import '../components/nav/MinimizerToggle.css'; 
import '../components/nav/Navigation.scss'; 
import '../components/nav/PageLink.css'; 
import '../components/nav/PaginationNav.css'; 
// import '../components/nav/info/Info.scss'; 
import '../components/nav/pages/Pages.scss';
import '../components/nav/pages/Page.scss';
import '../components/pageViewport/PageGallery.scss';
import '../components/pageViewport/ViewPort.css';
import '../components/pageTutorial/Tutorial.scss';
import '../components/pageViewport/ImageLoad.css';

import { ComicReaderApp } from "./ComicReaderApp";
  
interface ReaderInput {
    folder: string;
    path: string;
    description: any;
}

export function ComicReader(props:ReaderInput) {
  const { path } = props;
  const [error, setError] = React.useState<any>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [pages, setPages] = React.useState<any[]>([]);
  const [id, setID] = React.useState<any>(null);
  // const [version, setVersion] = React.useState<any>(null);
  // const [description, setDescription] = React.useState<any>(null);

  React.useEffect(() => {

    fetch(`${path}/${props.folder}/${props.folder}.json`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPages(result.pages);
          // NOTE:  For claritity, setting Book Identifier number from "title" to "id"
          setID(result.title)
          // setVersion(result._bat_panelizer_version_)
        },
        // Note: handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [path, props.folder, props.path])

  //   EXAMPLE.   NOTE, we'll want to do this as a wrapped promise.all (or equivalent)
  //   to ensure first render doesn't give null for unitialzied conditions.
  //   --> Or <---
  //   Set initialized conditions in event of API call fail.
  // 
  //   React.useEffect(() => {
  //   fetch(`./${props.folder}/${props.description}`, {
  //               headers: {
  //                   'Content-Type': 'application/json',
  //                   'Accept': 'application/json'
  //               }
  //           })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setDescription(result);
  //       },
  //       // Note: handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [props.folder, props.description])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <></>;
  } else {
    return (
      <ComicReaderApp 
        pages={pages} 
        id={id}
        path={`${path}/${id}`}
        // version={version} 
        // description={description} 
      />
    );
  }
}