import React from 'react';


const GalleryItem = (props) => {
	let farmId = props.image.farm;
	let serverId = props.image.server;
	let id = props.image.id;
	let secret = props.image.secret;
	let url = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
	return (
	  <li>
	  	<img src={url} alt="" />
	  </li>
	);
}


export default GalleryItem;

