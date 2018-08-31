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

import './App.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import fourOfour from './Components/404';

import axios from 'axios';

import apiKey from './.config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: {
        basketball:[],
        baseball:[],
        football:[],
        search:[]
      },
      loading: true
    };
  }

  componentDidMount() {
    // calls the function below
    this.performSearch('basketball');
    this.performSearch('baseball');
    this.performSearch('football');


  }
  
  // calls the api. If none selected for 'query' then it will display 'cats' gifs 
  // by default.
  performSearch = (query, search=false) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (search){
          this.setState({
            images: {
              ...this.state.images,
              search: response.data.photos.photo,
            },
            loading: false
          });
        }else {
          this.setState({
          images: {
            ...this.state.images,
            [query]: response.data.photos.photo,
          },
          loading: false
        });
        }
        
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
 
  isLoading = () => {
    this.setState({
      images:{
        ...this.state.images,
      },
      loading: true
    })
  }
  

  render() { 
    return (
      <div>
      {
        (this.state.loading)
         ? <p>Loading...</p>
         : (

        <BrowserRouter>
          <div>
          <Header performSearch={this.performSearch} loading={this.isLoading} />
          
        
        
           <Switch>
            <Route exact path="/" render={ () => <Gallery data={this.state.images.basketball} />} />
            <Route path="/basketball" render={ () => <Gallery data={this.state.images.basketball} />} />
            <Route path="/baseball" render={ () => <Gallery data={this.state.images.baseball} />} />
            <Route path="/football" render={ () => <Gallery data={this.state.images.football} />} />
            <Route path="/search" render={ () => <Gallery data={this.state.images.search} />} />
            <Route component={fourOfour} />
        </Switch>
        </div>
      </BrowserRouter>)
      } 
      </div>
      
    );
  }
}

export default App;

