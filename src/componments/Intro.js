import React from "react";
import Tick from '../Images/Tick.jpg';

import { Row, Col, Button, Container } from "react-bootstrap";

import LegalCapital from "./subcomponments/LegalCapital";

export default Intro => (
    <Container className="py-5">
        <h1>A simple, smart way to make more of your money</h1>
        <p>A peer-to-peer lending platform with the operational simplicity and control of an online account. Inflation-busting interest paid daily. Watch your money grow with Loanpad.</p>

        <Row>
            <Col><img src={Tick} /> Daily interest</Col>
            <Col><img src={Tick} /> Daily access</Col>
            <Col><img src={Tick} /> £10 minimum</Col>
            <Col><img src={Tick} /> FCA authorised</Col>
            <Button>Open a Loanpad Account</Button>

            <LegalCapital />

        </Row>
    </Container>
);
