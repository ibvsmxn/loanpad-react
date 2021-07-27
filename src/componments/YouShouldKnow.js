import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

// Images
import capitalAtRisk from '../Images/Capital_at_risk_Icon.png';
import noProtection from '../Images/FSCS_Icon.png';
import pastPerformance from '../Images/Past_performance_Icon.png';
import economicFactors from '../Images/Economic_Icon.png';



export default YouShouldKnow => (
    <div className="py-5">
        <Container>
            <h2>You should know...</h2>

            <Row>
                <Col className="col-md-3">
                    <h4>Capital is at risk</h4>
                    <img src={capitalAtRisk} />
                    <p>As with any investment, your capital is at risk and your investment may go up or down in value.</p>
                </Col>
                <Col className="col-md-3">
                    <h4>No FSCS protection</h4>
                    <img src={noProtection} />
                    <p>You won't be covered by the Financial Services Compensation Scheme (FSCS) for potential future losses.</p>
                </Col>
                <Col className="col-md-3">
                    <h4>Past performance</h4>
                    <img src={pastPerformance} />
                    <p>As with all investments, past performance is not an indicator of future results.</p>
                </Col>
                <Col className="col-md-3">
                    <h4>Capital is at risk</h4>
                    <img src={economicFactors} />
                    <p>Changes in economic climate and / or geopolitical events could negatively impact the value of your investment.</p>
                </Col>
            </Row>
        </Container>
    </div> 
)