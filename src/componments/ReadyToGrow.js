import React from "react";

import { Row, Col, Button, Container, Alert } from "react-bootstrap";

import LegalCapital from "./subcomponments/LegalCapital";

// Images
import city from '../Images/City_background.jpg';
import stepOne from '../Images/Step_1_LP_Xanda_13.11.19.jpg';
import stepTwo from '../Images/Step_2_LP_Xanda_13.11.19.jpg';
import stepThree from '../Images/Step_3_LP_Xanda_13.11.19.jpg';
import stepFour from '../Images/Step_4_LP_Xanda_13.11.19.jpg';



export default ReadyToGrow => (
    <div className="py-5">
        <Container>
            <h2>Ready to <span>grow</span> your money?</h2>
            <p>Loanpad is a smart way to increase your investments while keeping risk as low as possible.</p>
 
            <a href="#welcomeBonus">
                <Button>Sign Up</Button>
            </a>

            <LegalCapital />
        </Container>

        

    </div>
    
)