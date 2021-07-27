import React from "react";

import { Row, Col, Button, Container, Form } from "react-bootstrap";

// Images
import lowerRisk from '../Images/Icon_1_LP_Xanda_13.11.19.jpg';
import taxFreeInterest from '../Images/Icon_2_LP_Xanda_13.11.19.jpg';
import inflationBustingInterest from '../Images/Icon_3_LP_Xanda_13.11.19.jpg';
import totalControl from '../Images/Icon_4_LP_Xanda_13.11.19.jpg';

import LegalCapital from "./subcomponments/LegalCapital";


export default Benefits => (
    <div className="bg-dark text-light py-5">
        <Container>
        <h2>Sign up today and qualify for a welcome bonus</h2>

        <p>Invest £5,000 for 365 days and receive £50</p>
        <p>Invest £10,000 for 365 days and receive £100</p>
        <p>Just enter the reference <span>WB620</span> when signing up</p>

        <Button>View welcome bonus terms</Button>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up Today
            </Button>

            <a href="https://www.loanpad.com/login" target="_blank">Or click here to sign in</a>
        </Form>

        <LegalCapital />

        <h4>Still not sure?</h4>
        <a href="#">Scroll down to find out more</a>

    </Container>
    </div>
    
)