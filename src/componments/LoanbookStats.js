import React from "react";
import Tick from '../Images/Tick.jpg';

import { Row, Col, Button, Container } from "react-bootstrap";

// Images
import totalLiveLoans from '../Images/Live_loans_Landing_page_Icon.png';
import lendingPartnerParticipation from '../Images/Total_leaning_partner_loans_Landing_page_Icon_V2.png';
import loanpadParticipation from '../Images/Total_LP_loans_Landing_page_Icon-1.png';
import suspendedLoanRate from '../Images/Default_rate_Landing_page_Icon-1.png';
import capitalLosses from '../Images/Capital_Loses_Landing_page_Icon.png';
import averageLTV from '../Images/Average_LTV_Landing_page_Icon.png';
import building from '../Images/Landing_page_Opt_building_gif.gif';

const lastUpdate=('23rd July 2021');

export default LoanbookStats => (
    <div className="bg-dark text-white py-5">
        <Container>
        <h2>Current Loanbook Statistics</h2>

        <Row>
            <Col className="col-md-8">
                <Row>
                    <Col className="col-md-4 stat">
                        <img src={totalLiveLoans} alt="Total Live Loans" />
                        <h4>£74,050,000</h4>
                        <span>Total live loans</span>
                    </Col>
                    <Col className="col-md-4 stat">
                        <img src={lendingPartnerParticipation} alt="Total Lending Partner Participation" />
                        <h4>£42,712,994</h4>
                        <span>Total Lending Parnter Participation</span>
                    </Col>
                    <Col className="col-md-4 stat">
                        <img src={loanpadParticipation} alt="Total Loanpad Participation" />
                        <h4>£35,871,078</h4>
                        <span>Total Loanpad Participation</span>
                    </Col>
                    <Col className="col-md-4 stat">
                        <img src={suspendedLoanRate} alt="Suspended Loan Rate" />
                        <h4>0%</h4>
                        <span>Suspended Loan Rate</span>
                    </Col>
                    <Col className="col-md-4 stat">
                        <img src={capitalLosses} alt="Capital Losses to Date" />
                        <h4>£0</h4>
                        <span>Capital Losses To Date</span>
                    </Col>
                    <Col className="col-md-4 stat">
                        <img src={averageLTV} alt="Average LTV" />
                        <h4>41%</h4>
                        <span>Average LTV</span>
                    </Col>
                </Row>
            </Col>
            <Col className="col-md-4">
                <img src={building} />
                <p>These fugures were last updated on the</p>
                <span id="lastUpdated">{lastUpdate}</span>
            </Col>

            <p className="prominent">Capital at risk. Not protected by the FSCS. Past performance is not an indicator of future results.</p>

        </Row>
    </Container>
    </div>
    
)