import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import APIs from './components/APIs/APIs';

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/apis" element={<APIs />} />
      </Routes>
    </div>
  );
}

export default App;
