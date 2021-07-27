import React from "react";

import { Row, Col, Button, Container, Form } from "react-bootstrap";

// Images
import classicAccount from '../Images/Classic_account_box_3.00.jpg';
import premiumAccount from '../Images/Premium_account_box_4.00.jpg';
import Tick from '../Images/Tick.jpg';

import LegalCapital from "./subcomponments/legalCapital";

export default OurAccounts => (
    <div className="py-5">
        <Container>
            <h2>Our Accounts</h2>

            <p>Choose the account that suits you best, with or without an ISA wrapper. You can move money between Loanpad accounts and check your interest 24/7.</p>

            <Row>
                <Col className="col-md-6">
                    <img src={classicAccount} />
                </Col>
                <Col className="col-md-6">
                    <img src={premiumAccount} />
                </Col>
            </Row>

            <p>These are annual target interest rates paid daily into your cash account – after fees but before tax. If you choose to reinvest your interest daily, you’ll enjoy even higher returns. Rates are variable and could change.</p>
            <p>We do all we can to release your money as soon as you ask for it. But this does depend on funds being available, and from time to time there may be a slight delay.</p>
        </Container>

        <div className="bg-grey py-4">
            <Container>
                <Row>
                    <Col className="col-md-3">Daily interest <img src={Tick} /></Col>
                    <Col className="col-md-3">Daily access<img src={Tick} /></Col>
                    <Col className="col-md-3">£10 minimum<img src={Tick} /></Col>
                    <Col className="col-md-3">FCA authorised<img src={Tick} /></Col>
                </Row>
            </Container>
            
        </div>

        <Button>Get Started</Button>

        <LegalCapital />

    </div>
    
)