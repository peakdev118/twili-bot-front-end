import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from "react-bootstrap";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from "../../components/CustomCard";
import SectionTitle from "../../components/Section/title";
import SectionSimpleDescription from "../../components/Section/simpledescription";

import icon1 from "../../images/homepage/Best-in-class-messaging-platform.svg";
import icon2 from "../../images/homepage/Gateway-Reliability-icon-40x40px-1.svg";
import icon3 from "../../images/homepage/Most-connected-partner-icon-3.svg";
import icon4 from "../../images/homepage/WhatApp-icon-Support.svg";

function WhyMessageMedia(props) {
  const cardsData = [
    {
      icon: icon1,
      title: "Best-in-class-platform",
      lists: [
        "Integrated into over 85 leading software systems",
        "Easy-touse web SMS portal",
        "No software to install",
        "Tier 1 security features",
      ],
    },
    {
      icon: icon2,
      title: "Proven and trusted expertise",
      lists: [
        "22 years of industry experience",
        "Over 65,000 customers globally",
        "Experts who understand your needs",
        "420+ million messages sent monthly",
      ],
    },
    {
      icon: icon3,
      title: "Most connected partner",
      lists: [
        "Access to SMS, MMS, AND mobile landing pages",
        "Direct links to carriers",
        "On-shore delivery",
        "Over 85 third-party integrations",
      ],
    },
    {
      icon: icon4,
      title: "24/7 customer support",
      lists: [
        "24/7 Live chat and email support",
        "Free phone support 5 days until late",
        "Local onshore support",
        "Global team available 24/7",
      ],
    },
  ];

  const Content = function (lists) {
    return lists.map((item, index) => {
      return (
        <div className="font-size-14 text-start d-flex align-items-center" key={index}>
          <FontAwesomeIcon icon={faCheck} className="me-3" style={{ color: "#33bbed" }} />
          {item}
        </div>
      )
    })
  };

  return (
    <section className="why-message-media">
      <Container className="px-3 py-5">
        <div className="text-center">
          <SectionTitle title="Why Message Media?" />
          <SectionSimpleDescription
            className="text-center"
            description="With 20 years of messaging experience, our trusted messaging experts support customers across every industry.We know the challenges your business faces and how to solve them."
            />
          <Row>
            {
              cardsData.map((item, index) => {
                return (
                  <Col md={6} lg={3} sm={12} key={index}>
                    <CustomCard
                      className="bg-grey"
                      icon={item.icon}
                      title={item.title}
                      content={Content(item.lists)}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default WhyMessageMedia;