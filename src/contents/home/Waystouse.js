import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SectionTitle from "../../components/Section/title";
import SectionSimpleDescription from "../../components/Section/simpledescription";
import CustomCard from '../../components/CustomCard';

import icon1 from '../../images/homepage/Messaging-MMS_Special-announcements_icon-1.svg';
import icon2 from '../../images/homepage/Inbound-messaging-icon.svg';
import icon3 from '../../images/homepage/WhatApp-icon-Notifications.svg';
import icon4 from '../../images/homepage/Appointment-reminders-icon.svg';

function WaysToUse(props) {

    const cardsData = [
        {
            icon: icon1,
            title: 'SMS marketing campaigns',
            content: 'Encourage customers to text-in a keyword, which triggers an automated respose and builds your marketing database',
        },
        {
            icon: icon2,
            title: 'Text-in competitions',
            content: 'Get the public to opt-in. For example, ‘Text us by midnight to enter’. Automate replies based on keywords or when it was sent.',
        },
        {
            icon: icon3,
            title: 'Feedback & surveys',
            content: 'Automatically follow-up with an SMS-based survey. Send auto replies based on feedback results to continue the conversation.',
        },
        {
            icon: icon4,
            title: 'Schedule SMS reminders',
            content: 'Reclaim hours spent manually sending appointment reminders and confirmations by scheduling text messages in advance.',
        },
    ]

    const Content = function (content){
        return (
            <p className="font-size-14">
                {content}
            </p>
        )
    }
    return (
        <section>
            <Container className="px-3 py-5">
                <div className="text-center">
                    <SectionTitle title = "Ways to use" className = ""/>
                </div>
                <SectionSimpleDescription 
                className = "text-center"
                description = "For 20 years, we have been providing solutions across many industries and use cases. SMS will take your marketing initiatives and customer support to the next level - without having to think twice about it."/>
                <Row className="mt-5">
                    {
                        cardsData.map((item, index) => {
                            return (
                                <Col key = {index} sm = {12} md = {6} lg = {3}>
                                    <CustomCard className = "bg-grey" 
                                    icon = {item.icon} 
                                    title = {item.title} 
                                    content = {Content(item.content)}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default WaysToUse;