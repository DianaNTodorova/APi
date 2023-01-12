import React, { Component } from 'react';
import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const Movie = () => {
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    let responce = await fetch('${API_ENDPOINT}');
    const data = await responce.json();
    setMovie(data);
  };
  const numbers = [1, 2, 3, 4, 5];
  const listOfNumbers = numbers.map((number) => <li>{number}</li>);
  useEffect(() => {
    getMovie();
  });
  return (
    <>
      <div>Movie template</div>
      <p>{movie.Title}</p>
      <ul>{listOfNumbers}</ul>
    </>
  );
};

export default Movie;
