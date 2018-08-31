import React from 'react';



import Form from './Form';
import Nav from './Nav';

const Header = (props) => {
	return(
		<div>	
	  		<Form onSearch={props.performSearch} />
	  		<Nav onSearch={props.performSearch}/>
	  	</div>
  	);
}


export default Header;

// split this up into 'Form' and 'Nav' components 