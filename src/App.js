import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// For the Header
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componments/Header";


// For the Body;
import Intro from "./componments/Intro";
import LoanbookStats from "./componments/LoanbookStats";

import 'react-bootstrap';

import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro />
      <LoanbookStats />
    </div>
  );
}


export default App;