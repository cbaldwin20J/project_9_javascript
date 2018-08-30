import React from 'react';

import Gallery_item from './Gallery_item';
import NoImages from './NoImages';

const Gallery = (props) => (

	let images;

	if (props.data.length){
		images = props.data.map(image => <Gallery_item url={image.images.fixed_height.url} key={image.id} />); 
	} else{
		images = <NoImages />
	}
	
	return (
		<div class="photo-container">
		    <h2>Results</h2>
		    <ul>
			    {images}
		    </ul>
		</div>
		)
)


export default Gallery;

const results = props.data;
  let gifs;
  // if there are gifs that matched the api url.
  if (results.length) {
    // remember whenever using 'map' we need to put a unique 'key'. It helps React.
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);    
  } else {
    gifs = <NoGifs />
  }

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );