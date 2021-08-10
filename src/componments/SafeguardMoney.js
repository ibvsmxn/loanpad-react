import React from "react";

import { Row, Col, Button, Container, Alert } from "react-bootstrap";

// Images
import dailySpreading from '../Images/Daily_spreading_LP_Xanda_13.11.19.jpg';
import sharedTerms from '../Images/Shared_loans..._LP_Xanda_13.11.19.jpg';
import responsibleLending from '../Images/Responsible_lending_LP_Xanda_13.11.19.jpg';
import interestCoverFund from '../Images/Interest_cover_fund..._LP_Xanda_13.11.19.jpg';



export default SafeguardMoney => (
    <div className="py-5" id="safeguardMoney">
        <div className="bg-grey py-5">
            <Container>
                <h2>How we safeguard your money</h2>
                <p>No lending account is completely risk-free. But Loanpad is built to keep the risk to your money as low as possible. Here’s how...</p>
            </Container>
        </div>

        <div className="bg-white py-5 text-lg-start">
            <Container>
                <Row>
                    <Col className="col-12 col-md-8">
                        <h3>Daily Spreading</h3>
                        <p>Every day your money is diversified across our entire book of loans. Not only does this reduce the impact from any one borrower defaulting, but it means there’s no difference between drip feeding money into your Loanpad account or putting in a lump sum. You get the same great rates at the same risk either way.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <img src={dailySpreading} />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="bg-grey py-5 text-lg-start">
            <Container>
                <Row>
                    <Col className="col-12 col-md-8">
                        <h3>Shared loans for lower risk</h3>
                        <p>The loans made with your money are shared with our lending partners – we only work with carefully vetted established lenders. They manage each loan with our oversight and are responsible for the higher risk part (called the ‘junior tranche’). As the lending partner will always take at least 25% of the loan, there’s lower risk to you if a borrower defaults. If this does happen, your money will be repaid (plus interest) before the lending partner’s share.</p>
                        <p>This also means it’s in our lending partners’ interest to check potential borrowers extensively, just as we do.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <img src={sharedTerms} />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="bg-white py-5 text-lg-start">
            <Container>
                <Row>
                    <Col className="col-12 col-md-8">
                        <h3>Responsible lending</h3>
                        <p>We only take on carefully vetted lower-risk property loans. As part of our extensive due diligence for approving each loan, we look at the credit history, experience and activity of each borrower and review asset and liability statements and payment history. Our panel of surveyors and solicitors also check the legality and security of every potential loan and borrower. We carefully review the exit strategy for each loan – and all loans are backed (secured) by property that we can sell to recover your money if the loan defaults.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <img src={responsibleLending} />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="bg-grey py-5 text-lg-start">
            <Container>
                <Row>
                    <Col className="col-12 col-md-8">
                        <h3>Interest Cover Fund</h3>
                        <p>We safeguard your daily income using this unique ring-fenced fund which covers your daily interest payments if any borrowers fall behind on their payments. With short-term property loans, delays can happen – this fund exists to make sure you get paid daily, in full. You can see real-time details of this fund on our platform at any time. More about the interest cover fund.</p>
                    </Col>
                    <Col className="col-12 col-md-4">
                        <img src={interestCoverFund} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Alert>
                    The <Alert.Link href="https://loanpad.com/icf-policy" target="_blank">Interest Cover Fund</Alert.Link> we offer does not give you a right to a payment so you may not receive a pay-out even if you suffer loss. The fund has absolute discretion as to the amount that may be paid including making no payment at all. Therefore, investors should not rely on possible pay-outs from the Interest Cover Fund when considering whether or how much to invest.
                </Alert>
            </Container>
        </div>
        
    </div>
    
)