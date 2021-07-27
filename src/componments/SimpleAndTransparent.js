import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

// Images
import city from '../Images/City_background.jpg';
import stepOne from '../Images/Step_1_LP_Xanda_13.11.19.jpg';
import stepTwo from '../Images/Step_2_LP_Xanda_13.11.19.jpg';
import stepThree from '../Images/Step_3_LP_Xanda_13.11.19.jpg';
import stepFour from '../Images/Step_4_LP_Xanda_13.11.19.jpg';



export default SimpleAndTransparent => (
    <div className="py-5">
        <Container>
            <h2>Simple and transparent</h2>
            <p>We’ve designed Loanpad for maximum simplicity and transparency. We don’t charge a fee, but make a margin on the rate of interest paid by borrowers. Essentially, we make money when you make money – so it’s in everyone’s interest to make sure every single loan is rock-solid.</p>

            <img src={city} alt="city Backdrop" />

            <h2>How it works</h2>

            <Row>
                <Col className="col-md-3">
                    <img src={stepOne} />
                    <h4>Make a deposit</h4>
                    <p>Put money into your cash account by bank transfer or standing order.</p>
                </Col>
                <Col className="col-md-3">
                    <img src={stepTwo} />
                    <h4>Choose your account</h4>
                    <p>Choose to lend through your Classic or Premium account, or both. You can move your money around to suit your needs.</p>
                </Col>
                <Col className="col-md-3">
                    <img src={stepThree} />
                    <h4>Enjoy daily interest</h4>
                    <p>Watch your interest grow from your fully diversified portfolio of lower-risk property loans.</p>
                </Col>
                <Col className="col-md-3">
                    <img src={stepFour} />
                    <h4>Stay in control</h4>
                    <p>Enjoy free access, flexible accounts and complete visibility of your interest and diversified loans.</p>
                </Col>
            </Row>
        </Container>

        <Button>Get Started</Button>

        <p className="prominent">Capital at risk. Not protected by the FSCS. Past performance is not an indicator of future results.</p>

    </div>
    
)