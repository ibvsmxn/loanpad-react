import React from "react";
import Tick from '../Images/Tick.jpg';

import { Row, Col, Button, Container } from "react-bootstrap";

// Images
import lowerRisk from '../Images/Icon_1_LP_Xanda_13.11.19.jpg';
import taxFreeInterest from '../Images/Icon_2_LP_Xanda_13.11.19.jpg';
import inflationBustingInterest from '../Images/Icon_3_LP_Xanda_13.11.19.jpg';
import totalControl from '../Images/Icon_4_LP_Xanda_13.11.19.jpg';


export default Benefits => (
    <div className="py-5" id="benefits">
        <Container>
        <Row>
            <Col className="col-12 col-md-3 perk">
                <h4>Lower Risk</h4>
                <img src={lowerRisk} alt="Lower Risk" />
                <p>We partner with established property lenders and spread your money evenly every day across a portfolio of secured property loans.</p>
            </Col>
            <Col className="col-12 col-md-3 perk">
                <h4>Tax-free interest</h4>
                <img src={taxFreeInterest} alt="Tax Free Interest" />
                <p>Open a Loanpad ISA and start investing with as little as £10 and grow your money tax-free.</p>
            </Col>
            <Col className="col-12 col-md-3 perk">
                <h4>Inflation-busting interest</h4>
                <img src={inflationBustingInterest} alt="Inflation-busting interest" />
                <p>Reinvest your daily interest and reap the benefits of compound interest.</p>
            </Col>
            <Col className="col-12 col-md-3 perk">
                <h4>Total control</h4>
                <img src={totalControl} alt="Total Control" />
                <p>Move your money between accounts and check your interest any time.</p>
            </Col>
        </Row>
    </Container>
    </div>
    
)