import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import history from '../../../history';

import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import {CLEAR, addPhoneComponent} from 'redux-action';

import "./ship.css";

class ShippingLabel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shippingLabelUrl: ''
        }
       
    }

    componentDidMount() {        
        this.setState({shippingLabelUrl: this.props.shipping_label});
        this.props.dispatch(addPhoneComponent(CLEAR));

    }

	changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({isResidential: e.target.checked})
    }


	render() {
            
		        return (
				<Container>
                    <Row className="rows">
                        <Col>
                            <h1>Please print off your shipping label below</h1>
                        </Col>
                    </Row>
                    <Row className="rows">
                        <Col>
                            <a href={this.state.shippingLabelUrl}>
                                <Button>
                                    Click here
                                </Button>
                            </a>
                        </Col>
                    </Row>
                </Container>
			);
	    }
}

function mapStateToProps(state) {
    return {
        shipping_label: state.shipping_label
    };
}
export default connect(mapStateToProps) (ShippingLabel)