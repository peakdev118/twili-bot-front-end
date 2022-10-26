import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Radius50Button from "../../components/Button/radius-50";
import SectionTitle from "../../components/Section/title";
import AutomatedSMSfeature from "../../images/homepage/Automated-SMS-feature-thumbnail-image.jpg";
import "../style/how-use-automated-sms.css";

function HowUseAutomatedSMS(){
    return (
        <section className="how-use-automated-sms">
            <Container className="px-3 py-5">
                <div className="text-center">
                    <SectionTitle title = "See how using automated SMS has helped our customer"/>
                </div>
                <Row className="mt-5">
                    <Col md = {6} sm = {12}>
                        <img src = {AutomatedSMSfeature} className = "w-100 mb-4" alt = "AutomatedSMSfeature"/>
                    </Col>
                    <Col md = {6} sm = {12} className = "py-2 text-center">
                        <p className = "font-size-14">
                            <a href="https://www.serviceseeking.com.au/">ServiceSeeking.com.au</a> is an online marketplace used by more than 3m Australians to compare quotes from local businesses, like plumbers, electricians, carpenters, and more.
                        </p>
                        <p className = "font-size-14">
                            Automated SMS improved business members’ experience by making communication more accessible and in real time.
                        </p>
                        <p className = "font-size-14">
                            “SMS is less intrusive and a better experience. There’s less hassle and it doesn’t interrupt their day,” they said.
                        </p>
                        <Radius50Button>Read our customer success story</Radius50Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowUseAutomatedSMS;