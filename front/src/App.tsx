import React, {FC} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import Navbar from './components/Navbar/Navbar';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games email="dfsf" name="putain" />} />
      </Routes>
    </div>
  );
}

export default App;
