import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'
import MovieList from './components/MovieList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="Movie Picker"/>
        <MovieList titles />
      </div>
    );
  }
}

export default App;
