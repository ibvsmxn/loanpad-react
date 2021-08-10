import { useState, render, show } from "react";

import { Modal, Button } from "react-bootstrap";

export default function LegalModal() {

const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          View Welcome Bonus Terms
        </Button>
  
        <Modal show={show} onHide={handleClose} id="legal"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
            <Modal.Title>Welcome Bonus Terms</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ol>
                  <li>You're eligible for a bonus on your first investment into a Loanpad lending account if you:

                      <ol>
                          <li>Have not previously invested with Loanpad;</li>
                          <li>Invest through a Loanpad ISA or Standard Account within 4 weeks of registration;</li>
                          <li>Register on or after 29 June 2020;</li>
                          <li>Use reference “WB620” when signing up.</li>
                      </ol>
                  </li>

                  <li>You will qualify for:
                      <ol>
                          <li>£50 bonus if you invest into a lending account a minimum of £5,000 within 4 weeks post registration and keep this invested for 365 days; or</li>
                          <li>£100 bonus if you invest into a lending account a minimum of £10,000 within 4 weeks post registration and keep this invested for 365 days.</li>
                      </ol>
                  </li>
                  <li>The maximum bonus per investor under this promotion is £100.</li>
                  <li>Earned bonuses will be credited to your Standard Cash Account within 14 days of qualifying.</li>
                  <li>This bonus is not available in conjunction with any other offer, or when you register through a cashback website.</li>
                  <li>The promoter of this offer is Loanpad Limited of 254-258 Goswell Road London EC1V 7EB and we reserve the right to amend or withdraw the offer at any time.</li>
              </ol>
            </Modal.Body>
        </Modal>
      </>
    );
}

