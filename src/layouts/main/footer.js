import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import icon1 from "../../images/icons/icon-chat.svg";
import icon2 from "../../images/icons/icon-connect-with-us.svg";
import icon3 from "../../images/icons/icon-get-in-touch.svg";
import icon4 from "../../images/icons/icon-how-it-works.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer bg-footer">
            <Container>
                <div className="footer-content">
                    <Row className="py-2 bg-light-footer px-4">
                        <Col md = "3" sm = {12} className = "text-center py-2">
                            <img src={icon1} className = "my-2" alt = "icon-chat"/>
                            <p className="text-white my-2">Chat with us</p>
                            <div className="my-2">
                                <Link className="text-white-50">chat now</Link>
                            </div>
                        </Col>
                        <Col md = "3" sm = {12} className = "text-center py-2">
                            <img src={icon2} className = "my-2" alt = "icon-chat"/>
                            <p className="text-white my-2">Get in touch</p>
                            <div className="my-2">
                                <Link className="text-white-50">1-813-344-2610</Link>
                            </div>
                        </Col>
                        <Col md = "3" sm = {12} className = "text-center py-2">
                            <img src={icon3} className = "my-2" alt = "icon-chat"/>
                            <p className="text-white my-2">See how it works</p>
                            <div className="my-2">
                                <Link className="text-white-50">Try for free</Link>
                            </div>
                        </Col>
                        <Col md = "3" sm = {12} className = "text-center py-2">
                            <img src={icon4} className = "my-2" alt = "icon-chat"/>
                            <p className="text-white my-2">Connect with us</p>
                            <div className="my-2 d-flex justify-content-space">
                                <Link className="text-white-50">
                                    <FontAwesomeIcon icon={brands('twitter')}/>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="footer-floor py-4 text-center text-white-50">
                    © 2022 Message4u Pty Ltd. All rights reserved.
                </div>
            </Container>
        </div>
    )
}

export default Footer;