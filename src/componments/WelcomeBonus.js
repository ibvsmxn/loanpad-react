import React, { useState, render } from "react";

import { Row, Col, Button, Container, Form, Modal } from "react-bootstrap";

// Images
import lowerRisk from '../Images/Icon_1_LP_Xanda_13.11.19.jpg';
import taxFreeInterest from '../Images/Icon_2_LP_Xanda_13.11.19.jpg';
import inflationBustingInterest from '../Images/Icon_3_LP_Xanda_13.11.19.jpg';
import totalControl from '../Images/Icon_4_LP_Xanda_13.11.19.jpg';

import LegalCapital from "./subcomponments/LegalCapital";
import LegalModal from "./subcomponments/LegalModal";


export default Benefits => (
    <div className="dark-grey text-light px-2 py-5" id="welcomeBonus">
        <Container>
        <h2>Sign up today and qualify for a welcome bonus</h2>

        <p>Invest £5,000 for 365 days and receive £50</p>
        <p>Invest £10,000 for 365 days and receive £100</p>
        <p><b>Just enter the reference '<span className="promo-code">WB620</span>' when signing up</b></p>

        <LegalModal />

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
                <Button variant="primary" type="submit" className="cta">
                Sign Up Today
                </Button>
                Or click here to <a href="https://www.loanpad.com/login" target="_blank" className="text-white">log in</a>.
                
            </Form.Group>
            
        </Form>

        <LegalCapital />

        <h4>Still not sure?</h4>
        <a href="#ourAccounts" className="text-white">Scroll down to find out more</a>

    </Container>

    


    </div>

    
    
)