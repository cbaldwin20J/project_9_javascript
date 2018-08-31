import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
	

	return(
		<nav class="main-nav">
		  <ul>
		    <li><NavLink onClick={() => props.onSearch('basketball')} to="/basketball">Basketball</NavLink></li>
		    <li><NavLink onClick={() => props.onSearch('baseball')} to="/baseball">Baseball</NavLink></li>
		    <li><NavLink onClick={() => props.onSearch('football')} to="/football">Football</NavLink></li>
		  </ul>
		</nav>
		)
}
	


export default Nav;