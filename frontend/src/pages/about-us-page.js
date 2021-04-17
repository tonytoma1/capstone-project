import React from 'react';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

import DeviceImage from 'images/phonetest.jpg';
//import { Container, Row, Col, Card} from 'reactstrap';

import {Image, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';
import {Input, Label, Button} from 'reactstrap';
import Map from 'components/map/Map';

import 'css/about-us-page.css';

export default class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSent: false,
            firstName: '',
            lastName: '',
            message: '',
            error: false
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick() {

        if(this.state.message == '' || this.firstName == '' || this.lastName == '') {
            this.setState({error: true});
        }
        else {
            
            this.setState({
            messageSent: true, 
            error: false})

        }

    
        
    }

    componentDidMount() {
        this.setState({message: '', 
        firstName: '',
        lastName: '',
        messageSent: false,
        error: false})
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
                                    <img src={DeviceImage} fluid />
                            </Col>
                                <Col>
                                    <Card style={{ width: '20rem', padding: '40px', border: 'none' }} >
                                        <div class = "card text-center">
                                        <Card.Title>We Specialize In: </Card.Title>
                                        <Card.Text>
                                            Fast Service
                                        </Card.Text>
                                        <Card.Text>
                                            Buying old mobile devices
                                        </Card.Text>
                                        <Card.Text>
                                            Quality Product
                                        </Card.Text>
                                        </div>
                                    </Card>
                                </Col>
                            
                        </Row>
                        <div className = "box">

                       
                                <h1>Contact us</h1>
                        <Row>
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <Label for="firstName">First Name</Label>
                                        <Input type="text" name="firstName" placeholder="John"  onChange={this.changeHandler}></Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="lastName">Last Name</Label>
                                        <Input type="text" name="lastName" placeholder="Smith"  onChange={this.changeHandler}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input type="textarea" name="message"  onChange={this.changeHandler}></Input>
                                    </FormGroup>
                                    {this.state.messageSent ? <p>Thank you for the message.</p> : null}
                                    {this.state.error ? <p>Please fill out all of the fields</p> : null}

                                    <Button onClick={() => this.handleClick()} >Submit</Button>
                                </Form>
                            </Col>

                            <Col>
                                <Map />
                            </Col>
                        </Row>    
                        </div>
                    </Container>
                </div>

                <Footer/>

            </div>
        );
    }
}