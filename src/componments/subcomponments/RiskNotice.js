import { useState, render, show } from "react";

import { Modal, Button } from "react-bootstrap";

export default function RiskNotice() {

const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <a href="#" onClick={handleShow}>
          risk
        </a>
  
        <Modal size="lg" show={show} onHide={handleClose} id="legal"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
            <Modal.Title>Risk Notice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>It’s up to you to make sure you handle your investment portfolio wisely – for example, by diversifying your investments and making sure you understand the potential risk and reward of each type of investment, including peer-to-peer lending. You should carefully read and consider the risk factors discussed in this risk notice and the details on our Invest and ISA pages before deciding to invest. If you are unsure, you should consult your own financial adviser. </p>

            <p>Any money you invest should not constitute a substantial proportion of your investment portfolio. You should have sufficient knowledge and experience in financial and business matters so as to be capable of evaluating such risks. You represent that you satisfy these criteria and that you are investing on that basis.</p>

            <p>While we do all we can to minimise the risk you’re exposed to through Loanpad, there are still some risks involved in investing with Loanpad.</p>

            <p>Here’s a summary of the main ones to help you make an informed decision about investing with Loanpad. This list isn’t exhaustive, but it should give you a good idea of the kinds of things that can affect the repayment of your money.</p>

            <h3>The risk of losing your money</h3>
            <p>When you lend money, you rely on the borrower repaying it. If, for example, a borrower’s credit circumstances take a turn for the worse, they may struggle to repay the loan. And if this happens, you run the risk of not getting back the money you’ve loaned to that borrower.</p>

            <p>In addition, Loanpad is not covered by the Financial Services Compensation Scheme (FSCS). As with any investment, your capital is at risk and the value of your investment may go up or down in value.</p>

            <h3>The risk of lower than expected returns</h3>
            <p>It is possible that a borrower could default and stop repaying the loan and its interest to you. In this case, you run the risk of not getting back the money you’ve loaned to that borrower and/or not receiving your daily interest in full.</p>

            <p>In addition, as interest rates are variable and subject to change, rates could go up or down. In this case, you run the risk of receiving a lower return than expected. We monitor interest rates against the performance of the loans on our portfolio. If our rates do change, we’ll let you know in advance and clearly explain the reason for the change.</p>

            <h3>The risk of not being able to withdraw your money immediately</h3>

            <p>It’s important to us – and no doubt to you – that you can access your money when you want it. When you request a withdrawal from a Loanpad account, your request goes into our sale queue, which is processed once a day. We do our best to clear the sale queue in full each day, but there’s no guarantee that we’ll always be able to.</p>

            <p>Just because you can’t withdraw your money straight away, doesn’t necessarily mean that it’s at higher risk. It means there isn’t enough available money (funds not tied up in loans) on the platform to process your withdrawal. Potential withdrawal delays are a feature of a lending site like Loanpad – and it’s important that you understand this.</p>

            <h3>More general economic risks</h3>
            <p>The UK economy could be affected by instability in its banking sector and by a variety of other macro-economic factors. This, in turn, could significantly constrain the availability of credit and make it more expensive. Market volatility and spells of risk aversion could also negatively impact the UK property and loan markets.</p>

            <p>Loanpad could be adversely affected by various factors beyond our control, including (but not limited to):</p>

            <ul>
              <li>Changes in general economic, political or local conditions</li>
              <li>Changes in the supply of or demand for property</li>
              <li>Changes in interest rates</li>
              <li>The financial condition of borrowers and of tenants, buyers and sellers of property</li>
              <li>Changes in property or corporate tax rates and other operating expenses</li>
              <li>Global pandemics</li>
              <li>Acts of terrorism</li>
              <li>Natural disasters</li>
            </ul>
          </Modal.Body>
        </Modal>
      </>
    );
}

