//Use the src/App.js file as your main container component, 
// where you should import your .config file.

// Keep and manage as much of the state and functionality as possible in your 
// src/App.js file, and pass data down to reusable stateless components with props. 

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';

import axios from 'axios';

import apiKey from './.config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    // calls the function below
    this.performSearch();
  }
  
  // calls the api. If none selected for 'query' then it will display 'cats' gifs 
  // by default.
  performSearch = (query = 'cats') => {
    // 'axios' is like 'Fetch', but better. Need to insall it with 'npm install'
    // The 'query' will go in the url and tell the api what specifically to retrieve.
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          // the gifs api sends back a dictionary like {'data': lskjd}, that's why we put 
          // 'data' twice as 'data.data'.
          images: response.data.photos.photo,
          // no need anymore for a loading screen.
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() { 
    return (
      <BrowserRouter>
        <Header performSearch={this.performSearch} />
        
        {
          (this.state.loading)
           ? <p>Loading...</p>
           : 
           <Switch>
            <Route exact path="/" render={ () => <Gallery data={this.state.images} />} />
            <Route component={NotFound} />
        }       
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

render() { 
  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={this.performSearch} />      
        </div>   
      </div>    
      <div className="main-content">
        // if 'this.state.loading' is true, then show '<p>Loading...</p>', otherwise
        // run '<GifList>'.
        {
          (this.state.loading)
           ? <p>Loading...</p>
           : <GifList data={this.state.gifs} />
        }       
        // 'GifList' returns a <ul> with the <li>s.   
      </div>
    </div>
  );
}