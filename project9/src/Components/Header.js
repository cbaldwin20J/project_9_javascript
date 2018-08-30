import React from 'react';



import Form from './Form';
import Nav from './Nav';

const Header = (props) => (
  <Form onSearch={props.performSearch} />
  

  <Nav />
)


export default Header;

// split this up into 'Form' and 'Nav' components