import React from 'react';
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';

import DeviceImage from 'images/phonetest.jpg';
import {Image, Container, Row, Col, Card} from 'react-bootstrap';


import 'css/about-us-page.css';

export default class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <Header />

                <div className="banner-div">
                    <h1 className="header-text">About us</h1> 
                </div>    

                

                {/*Banner */}
                <div className="wrapper"> 
                    <Container>
                        <Row>

                            <Col>
                                    <Image src={DeviceImage} fluid />
                            </Col>


                                <Col>
                                    <Card style={{ width: '20rem', padding: '10px' }} >
                                        <Card.Title>Fast Service</Card.Title>
                                        <Card.Text>
                                            We specialize in buying old mobile devices. 
                                        </Card.Text>
                                    </Card>
                                </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                                <h1>Contact us</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

                            </Col>

                            <Col>

                            </Col>
                        </Row>

                    </Container>
                </div>

                <Footer/>

            </div>
        );
    }
}