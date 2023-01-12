import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const Fetching = () => {
  const [info, setInfo] = useState({});
  const fetchTrivia = async () => {
    let response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
    );
    const data = await response.json();
    console.log(data);
    setInfo(data);
  };

  useEffect(() => {
    fetchTrivia();
  }, []);

  return (
    <>
      <div>Trivia request</div>
      <p>{info.category}</p>
    </>
  );
};

export default Fetching;
