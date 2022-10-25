import React from "react";
import { Row , Col, Container} from "react-bootstrap";
import Feature from "../../components/feature";
import icon1 from "../../images/homepage/Automate-reply-processes-icon.svg";
import icon2 from "../../images/homepage/Integrates-into-your-software-icon.svg";
import icon3 from "../../images/homepage/Streamlines-manual-tasks-icon.svg";

function Features(params) {
    const data = [
        {
            icon: icon1,
            title: 'Automates reply processes',
            content: 'Simplify inbound SMS with a rule-based system that’s faster than human capabilities. Customize rules to suit your user journey.',
        },
        {
            icon: icon2,
            title: 'Integrates into your software',
            content: 'MessageMedia integrates into your existing toolset - without needing to download new software. Upload sheets or connect to an API.',
        },
        {
            icon: icon3,
            title: 'Streamlines manual tasks',
            content: 'Set and forget repetitive and time-consuming tasks by creating SMS triggers. Get admin time back while keeping customers satisfied.',
        },
    ]
    return (
        <section>
            <Container className="px-3 py-5">
                <Row>
                    {
                        data.map((item, index)=>{
                            return (
                                <Col md = {4} sm = {12} key = {index}>
                                    <Feature title = {item.title} content = {item.content} icon = {item.icon}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}


export default Features;