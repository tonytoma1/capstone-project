import React from 'react';
import Logo from '../../../images/logo.png';
import history from '../../../history';
import axios from 'axios';
import './order.css';
import {Form, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import UserService from 'services/user.service';
import { Envelope, Person, Building, Telephone, Signpost2, Mailbox, Map } from 'react-bootstrap-icons';
import {SHIPPING_LABEL, addPhoneComponent} from 'redux-action';
import {Spinner} from 'react-bootstrap';

class ConfirmOrderPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			streetAddress1: "",
            streetAddress2: "",
            country: "US",
            state: "",
            zip: "",
            city: "",
            email: "",
			confirmEmail: "",
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
            isResidential: true,
			buttonClicked: false,
			error: false
        }

		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
       
    }

	changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    async submitHandler(e) {
		this.setState({buttonClicked: true})
        e.preventDefault();

		// Stringify the json shopping cart items
		let shoppingCartItems = this.props.shopping_cart;
		await UserService.placeOrder(this.state, shoppingCartItems)
					.then((response) => {
						let shippingLabelUrl = response.data.shippingLabelUrl;
						this.props.dispatch(addPhoneComponent(SHIPPING_LABEL, shippingLabelUrl));
						history.push("/shipping");

						this.setState({buttonClicked: false, 
									  error: false})
									
						window.location.reload();
					})
					.catch((error) => {
						this.setState({buttonClicked: false, 
									  error: true})
						console.log(error);
					})
    }

	render() {
		        return (
				<div className="confirm-order-container">
					<figure>
		            	<img src= {Logo} alt="Recommerce" />
		            	<figcaption>Recommerce</figcaption>
		            </figure>
					<Form onSubmit={this.submitHandler} method="POST">
					
						<Form.Row>
							<Col>
								<Form.Label className="label">PayPal Email</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text> <Envelope/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="email" name="email" placeholder="PayPal Email" onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Label className="label">Confirm PayPal Email</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text> <Envelope/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="email" name="confirmEmail" placeholder="PayPal Email" onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>

						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Label className="label">First Name</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Person/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" name="firstName" placeholder="John" onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>

							<Col>
								<Form.Label className="label">Last Name</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Person/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" name="lastName" placeholder="Doe" onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Label className="label">City</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Building/></InputGroup.Text>
								</InputGroup.Prepend>
									<FormControl type="text" placeholder="San Diego" name="city" onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>

							<Col>
								<Form.Label className="label">State</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text><Map/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl as="select" name="state" onChange={this.changeHandler}>
										<option selected="selected">Please Select a State</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District Of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>	
									</FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						
						<Form.Row>
							<Col>
								<Form.Label className="label">Phone</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Telephone/></InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" placeholder="619-555-5555" name="phone"  onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Label className="label">Address 1</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Signpost2/> </InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" placeholder="123 Street" name="streetAddress1"  onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
							<Col>
								<Form.Label className="label">Address 2</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Signpost2/> </InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" placeholder="Aparament #112" name="streetAddress2"  onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Label className="label">Zip Code</Form.Label>
								<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text> <Mailbox/> </InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl type="text" placeholder="92102" name="zip"  onChange={this.changeHandler}></FormControl>
								</InputGroup>
							</Col>
						</Form.Row>

						{this.state.error ? <Form.Row><p style={{color: 'red'}}>Address Information Is Incorrect</p></Form.Row> : null}

						<Form.Row>
							<Col>
							{this.state.buttonClicked ? <Spinner className="spinner" animation="border" variant="success" /> : 
							<FormControl className="form-submit" type="submit" value="Submit"/>
							}
								
							</Col>
						</Form.Row>

					</Form>
				</div>	
			);
	    }
}

function mapStateToProps(state) {
	return {
		model: state.model,
		storage: state.storage,
		service_provider: state.service_provider,
		shopping_cart: state.shopping_cart
	};
}

export default connect(mapStateToProps) (ConfirmOrderPage);
