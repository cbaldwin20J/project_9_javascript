import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






// Need to create 4 routes. 3 defaults, and one search.

// examples of possible components: Header for the search bar, 
// Form for the search form (don't make this one stateless),
// Nav for the default buttons, 
// Gallery, Gallery_Item for the lis containing the images, 
