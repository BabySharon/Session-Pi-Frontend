import React, { Component }  from 'react';
import { useState } from 'react';
import './App.css';
import Examples from './components/Examples';
import Overview from './components/Overview';
import UserGuide from './components/UserGuide';
import Animation from './components/Animation';

function App() {
  const [clicked, setClicked] = useState("Animation");
  const mapping = {
    "Examples": Examples,
    "Overview": Overview,
    "User Guide": UserGuide,
    "Animation": Animation
  }

  function handleClick(e) {
    setClicked(e.target.innerText);
  }

  function renderComponent(c) {
    const Component = mapping[c];
    return <Component />;
  }

  return (
    <>
      <div className="custom-navbar">
        <div className="nav-button" onClick={handleClick}><p>Animation</p></div>
        <div className="nav-button" onClick={handleClick}><p>Overview</p></div>
        <div className="nav-button" onClick={handleClick}><p>Examples</p></div>
        <div className="nav-button" onClick={handleClick}><p>User Guide</p></div>
      </div>

      {renderComponent(clicked)}
    </>
  );
}

export default App;
