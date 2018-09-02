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
// axios is for retrieving the flickr API json.
import axios from 'axios';
// flickr api key. Need to create your own.
import apiKey from './.config.js';

// The main component that contains all other components
class App extends Component {
  constructor() {
    super();
    // holds the three default image options and the 'search'
    // images
    this.state = {
      images: {
        basketball:[],
        baseball:[],
        football:[],
        search:[]
      },
      // will show the loading screen while getting the data
      loading: true
    };
  }
  // after the html renders this will run
  componentDidMount() {
    // calls the function below
    this.performSearch('basketball');
    this.performSearch('baseball');
    this.performSearch('football');
  }
  
  // calls the api, and sets the 'state'.  
  performSearch = (query, search=false) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // if user is using the 'search' bar.
        if (search){
          this.setState({
            images: {
              ...this.state.images,
              search: response.data.photos.photo,
            },
            loading: false
          });
        // sets the state for default buttons: 'basketball', 'baseball', and 'football'.
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
  
  // for when the user uses the 'search' bar it will display
  // the loading sign until the results appear.
  isLoading = () => {
    this.setState({
      images:{
        ...this.state.images,
      },
      loading: true
    });
  }
  
  // has routes for the three default buttons, the search field, and 404 page.
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

