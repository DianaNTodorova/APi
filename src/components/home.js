import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const initProfile = {
  publicrepos: null,
  website: null,
};

const Fetch = () => {
  const [profile, setProfile] = useState(initProfile);
  const getProfile = async () => {
    const response = await fetch('https://api.github.com/users/DianaNTodorova');
    const json = await response.json();
    setProfile({
      publicrepos: json.public_repos,
      website: json.blog,
    });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      Fetch data with useEffect
      <h3>{`Public repositories: ${profile.publicrepos}`}</h3>
      <h3>{`WebSites: ${profile.website}`}</h3>
    </div>
  );
};
export default Fetch;
