
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import RiskNotice from "./subcomponments/RiskNotice";

class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer bg-dark text-light p-5">
        <Container>
          <Row>
            <Col className="col-12 col-md-6">
              <Row>
                Copyright © 2021 Loanpad Limited. All Rights Reserved
              </Row>
              <Row>
                <ul>
                  <li><a href="https://www.loanpad.com/terms" target="_blank">Terms</a></li>
                  <li><a href="https://www.loanpad.com/privacy-policy" target="_blank">Privacy Policy</a></li>
                  <li><a href="https://www.loanpad.com/cookies-policy" target="_blank">Cookie Policy</a></li>
                  <li><a href="riskNotice()" target="_blank">Risk Notice</a></li>
                  <li><a href="https://loanpad.com/icf-policy" target="_blank">ICF Policy</a></li>
                  <li><a href="https://loanpad.com/key-information" target="_blank">Key Information</a></li>
                  <li><a href="https://loanpad.com/faqs" target="_blank">FAQ's'</a></li>
                  <li><a href="http://www.loanpad.com/contact" target="_blank">Contact</a></li>
                </ul>
              </Row>
            </Col>
            <Col className="col-12 col-md-6">
              <p>Loanpad Limited is authorised and regulated by the Financial Conduct Authority (FRN:741576) and by HMRC as an ISA manager. Loanpad is not covered by the Financial Services Compensation Scheme (FSCS). As with any investment, your capital is at <RiskNotice /> and your investment may go up or down in value.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;