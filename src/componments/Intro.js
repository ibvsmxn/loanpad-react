import React from "react";
import Tick from '../Images/Tick.jpg';

import { Row, Col, Button, Container } from "react-bootstrap";

import LegalCapital from "./subcomponments/LegalCapital";

export default Intro => (
    <Container className="px-5 py-5" id="intro">
        <h1>A simple, smart way to make more of your money</h1>
        <p>A peer-to-peer lending platform with the operational simplicity and control of an online account. Inflation-busting interest paid daily. Watch your money grow with Loanpad.</p>

        <Row>
            <Col className="intro-perk col-12 col-md-3"><img src={Tick} /> Daily interest</Col>
            <Col className="intro-perk col-12 col-md-3"><img src={Tick} /> Daily access</Col>
            <Col className="intro-perk col-12 col-md-3"><img src={Tick} /> £10 minimum</Col>
            <Col className="intro-perk col-12 col-md-3"><img src={Tick} /> FCA authorised</Col>
        </Row>
        <Row>
            <a href="#welcomeBonus">
                <Button>Open a Loanpad Account</Button>
            </a>
            <LegalCapital />
        </Row>
    </Container>
);
