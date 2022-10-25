import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MainPageList from "../../components/MainPageList";

import exampleImg from '../../images/homepage/Delivery-Tracking.gif';

function SmsHelpWays(props) {
  const lists = [
    {
      title: `Grow your customer base with opt-in SMS marketing`,
      content: `Use a shortcode to run opt-in campaigns. Offer vouchers, launch competitions or invite customers to join your loyalty program. Automatically add contacts to groups, customise opt-out rules and measure success with scheduled reporting.`,
    },
    {
      title: `Forward SMS to email (and vice versa)`,
      content: `If you’re on the go or out of office, get messages from wherever you are. Leverage automation to send and receive SMS from your email address. MMS messages can be sent as email attachments, so the transition is seamless wherever you are.`,
    },
    {
      title: `Segment contact groups based on inbound messages`,
      content: `Automatically create VIP lists by creating rules, keyword triggers and trackable links. Sort contacts into as many groups as you like, from prospects to returning customers. Turn a single text message into a customised two-way conversation - without needing to be there.`,
    }
  ];

  return (
    <section className="sms-help-ways bg-grey">
      <Container className="px-4 py-5">
        <div className="title text-center">
          <span>How SMS automation can help your business</span>
        </div>
        <div className="simple-description text-center mt-3">
          Sending automated text messages will simplify your workflow, so you
          can spend less time on manual tasks and more time boosting your bottom line.
        </div>
        <div className="mt-4">
          <Row>
            <Col md={6} sm={12}>
              <div className="d-flex justify-content-center">
                <img src={exampleImg} className="example-img w-100" alt = "example-img"></img>
              </div>
            </Col>
            <Col md={6} sm={12} className="mt-5">
              {
                lists.map((item, index) => {
                  return (
                    <MainPageList key = {index} title={item.title} content={item.content} liststyle = "list-style-image"/>
                  )
                })
              }
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default SmsHelpWays;