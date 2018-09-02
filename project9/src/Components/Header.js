import React from 'react';

import Form from './Form';
import Nav from './Nav';

// displays the search input field, and the default image buttons "basketball" etc.
const Header = (props) => {
	return(
		<div>	
	  		<Form onSearch={props.performSearch} loading={props.loading} />
	  		<Nav />
	  	</div>
  	);
};

export default Header;
