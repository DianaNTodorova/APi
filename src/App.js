import React, { Component } from 'react';
import Fetch from './components/home';
import Fetching from './components/trivia';
import Movie from './components/Movie';
function App() {
  return (
    <div>
      <Fetch />
      <Fetching />
      <Movie />
    </div>
  );
}

export default App;
