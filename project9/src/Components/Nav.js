import React from 'react';
import { NavLink } from 'react-router-dom';

// the three default image buttons
const Nav = () => {
	return(
		<nav className="main-nav">
		  <ul>
		    <li><NavLink to="/basketball">Basketball</NavLink></li>
		    <li><NavLink to="/baseball">Baseball</NavLink></li>
		    <li><NavLink to="/football">Football</NavLink></li>
		  </ul>
		</nav>
		);
};

export default Nav;