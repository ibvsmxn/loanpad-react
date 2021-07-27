import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// For the Header
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componments/Header";


// For the Body;
import Intro from "./componments/Intro";
import LoanbookStats from "./componments/LoanbookStats";
import Benefits from "./componments/Benefits";
import Divider from './componments/Divider';

import 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import WelcomeBonus from "./componments/WelcomeBonus";
import OurAccounts from "./componments/OurAccounts";
import SimpleAndTransparent from "./componments/SimpleAndTransparent";
import SafeguardMoney from "./componments/SafeguardMoney";
import ReadyToGrow from "./componments/ReadyToGrow";
import YouShouldknow from "./componments/YouShouldKnow";


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro />
      <LoanbookStats />
      <Benefits />
      <WelcomeBonus />
      <Divider />
      <OurAccounts />
      <Divider />
      <SimpleAndTransparent />
      <SafeguardMoney />
      <ReadyToGrow />
      <Divider />
      <YouShouldknow />
    </div>
  );
}


export default App;