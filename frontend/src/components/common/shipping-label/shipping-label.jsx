import React from 'react';
import Logo from '../../../images/logo.png';
import test from '../../../images/test.jpg';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import history from '../../../history';

import {connect} from 'react-redux';
import Shipping from 'pages/shipping';

class ShippingLabel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shippingLabelUrl: ''
        }
       
    }

    componentDidMount() {        
        this.setState({shippingLabelUrl: this.props.shipping_label});


    }

	changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({isResidential: e.target.checked})
    }


	render() {
            
		        return (
				<div className="shipping-label-container">
                    
					<p><a href={this.state.shippingLabelUrl}>test</a></p>
				</div>	
			);
	    }
}

function mapStateToProps(state) {
    return {
        shipping_label: state.shipping_label
    };
}
export default connect(mapStateToProps) (ShippingLabel)