import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../../components/Section/title";
import SectionSimpleDescription from '../../components/Section/simpledescription';
import MainPageList from "../../components/MainPageList";

import graphicimage from '../../images/homepage/123-graphic.svg';
import Radius50Button from "../../components/Button/radius-50";

function Easy3StepSetup() {
  const lists = [
    {
      title: `Create an account with MessageMedia`,
      content: `Our online web portal is easy to navigate and ready for you to send MMS or SMS  messages from. Alternatively connect to an API.`,
    },
    {
      title: `Set up your rule-based triggers`,
      content: `From sceduling an out-of-office text to customising your opt-out keywords, your conditions can be as simple or complex as you like.`,
    },
    {
      title: `Send messages and rely on automatic replies`,
      content: `Once you've sent a mass text, you can count on triggered responses without needing to manage them.`,
    }
  ];
  return (
    <section className="sms-help-ways bg-grey">
      <Container className="px-3 py-5">
        <div className="title text-center">
          <SectionTitle title="Easy 3 step setup" />
        </div>
        <SectionSimpleDescription className="simple-description text-center mt-3"
          description="Whether you are sending a single message or a marketing blast, our cloud-based SMS portal makes it simple. Get round-the-clock premium support from our expert team." />
        <div className="mt-4">
          <Row>
            <Col md={6} sm={12}>
              <div className="d-flex justify-content-center">
                <img src={graphicimage} className="graphicimage w-100" alt="graphicimage"></img>
              </div>
            </Col>
            <Col md={6} sm={12} className="mt-5">
              {
                lists.map((item, index) => {
                  return (
                    <MainPageList key={index} title={item.title} content={item.content} liststyle={"line-style-number"+(index+1)} />
                  )
                })
              }
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-5">
            <Radius50Button>Start messaging for free</Radius50Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Easy3StepSetup;