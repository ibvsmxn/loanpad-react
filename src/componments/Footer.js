
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer bg-dark text-light p-5">
        <Container>
          <Row>
            <Col className="col-md-6">
              <Row>
                Copyright © 2021 Loanpad Limited. All Rights Reserved
              </Row>
              <Row>
                <ul>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Risk Notice</a></li>
                  <li><a href="#">ICF Policy</a></li>
                  <li><a href="#">Key Information</a></li>
                  <li><a href="#">FAQ's'</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </Row>
            </Col>
            <Col className="col-md-6">
              Loanpad Limited is authorised and regulated by the Financial Conduct Authority (FRN:741576) and by HMRC as an ISA manager. Loanpad is not covered by the Financial Services Compensation Scheme (FSCS). As with any investment, your capital is at risk and your investment may go up or down in value.
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;