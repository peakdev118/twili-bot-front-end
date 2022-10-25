import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Radius50Button from "../../components/Button/radius-50";

import automationmainimg from '../../images/homepage/Automation-main-image.svg';
import '../style/automation-sms-service.css';

function AutomationSmsServiceSection() {
  return (
    <section className="automation-sms-service">
      <Container className="px-3 py-5">
        <Row>
          <Col md={6}>
            <h1 className="title my-1 text-center">Automated SMS service</h1>
            <img className="d-md-none" src={automationmainimg} alt="automation-main-img"></img>
            <p className="content text-center">
              <span>
                Send messages promptly and efficiently-without needing to be there. Use rule-based triggers to save your business time.
              </span>
            </p>
            <div className="d-flex justify-content-center">
              <Radius50Button className="messageing-for-free-btn">Start messageing for free</Radius50Button>
            </div>
          </Col>
          <Col md={6}>
            <img className="d-none d-md-block" src={automationmainimg} alt="automation-main-img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AutomationSmsServiceSection;