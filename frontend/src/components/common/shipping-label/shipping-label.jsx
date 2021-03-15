import React from 'react';
import Logo from '../../../images/logo.png';
import axios from 'axios';
import './order.css';

export default class ShippingLabel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bgColor: ""
        }
       
    }

	changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({isResidential: e.target.checked})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/shipping-label", this.state)
            .then(response => {
                console.log(response);
                window.location.reload();
               
            })
            .catch(error => {
                console.log(error);
            })
    }

	render() {
	        const {} = this.state;
		        return (
				<div className="shipping-label-container">
					
				</div>	
			);
	    }
}