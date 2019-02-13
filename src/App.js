import React, { Component } from 'react';

import Title from './components/Title'
// import MovieList from './components/MovieList'

class App extends Component {
  render() {
    console.log('API key', process.env.REACT_APP_TMDB_API_KEY)
    return (
      <div className="App">
        <Title title="Movie Picker"/>
        {/* <MovieList titles /> */}
      </div>
    );
  }
}

export default App;
