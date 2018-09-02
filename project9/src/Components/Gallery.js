import React from 'react';

import GalleryItem from './Gallery_item';
import NoImages from './NoImages';

// the photo gallery portion of the page
const Gallery = (props) => {
	let images;
	// if there is any photos to display
	if (props.data.length){
		images = props.data.map(image => <GalleryItem image={image} key={image.id} />); 
	} else{
		images = <NoImages />
	}
	
	return (
		<div className="photo-container">
		    <h2>Results</h2>
		    <ul>
			    {images}
		    </ul>
		</div>
	);
};

export default Gallery;

