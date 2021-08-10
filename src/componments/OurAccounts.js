import React from "react";

import { Row, Col, Button, Container, Form } from "react-bootstrap";

// Images
import classicAccount from '../Images/Classic_account_box_3.00.jpg';
import premiumAccount from '../Images/Premium_account_box_4.00.jpg';
import Tick from '../Images/Tick_grey.jpg';

import LegalCapital from "./subcomponments/LegalCapital";

export default OurAccounts => (
    <div className="py-5" id="ourAccounts">
        <Container>
            <h2>Our Accounts</h2>

            <p>Choose the account that suits you best, with or without an ISA wrapper. You can move money between Loanpad accounts and check your interest 24/7.</p>

            <Row>
                <Col className="col-12 col-md-6">
                    <img src={classicAccount} />
                </Col>
                <Col className="col-12 col-md-6">
                    <img src={premiumAccount} />
                </Col>
            </Row>

            <p>These are annual target interest rates paid daily into your cash account – after fees but before tax. If you choose to reinvest your interest daily, you’ll enjoy even higher returns. Rates are variable and could change.</p>
            <p>We do all we can to release your money as soon as you ask for it. But this does depend on funds being available, and from time to time there may be a slight delay.</p>
        </Container>

        <div className="bg-grey my-4 py-1">
            <Container>
                <Row>
                    <Col className="col-12 col-md-3 account-perk">ISA eligible <img src={Tick} /></Col>
                    <Col className="col-12 col-md-3 account-perk">Your money diversified daily<img src={Tick} /></Col>
                    <Col className="col-12 col-md-3 account-perk">Interest paid daily to cash account<img src={Tick} /></Col>
                    <Col className="col-12 col-md-3 account-perk">Designed for ower risk<img src={Tick} /></Col>
                </Row>
            </Container>
            
        </div>

        <a href="#welcomeBonus">
            <Button>Get Started</Button>
        </a>
        
        <Container>
            <LegalCapital />
        </Container>
    </div>
    
)