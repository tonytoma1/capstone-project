import React from 'react';
import Logo from '../../../images/logo.png';
import './order.css';

function confirmOrder() 
{
	return (
		<div className="confirm-order-container">
			<figure>
            	<img src= {Logo} alt="Recommerce" />
            	<figcaption>Recommerce</figcaption>
            </figure>
			<form onSubmit={this.handleSubmit}>
				<section>
                	<p>PayPal Email</p>
                	<input type="email" id="PaypalEmail"  onChange={this.handlePaypalEmail} placeholder="Required Fields" required/>
                </section>
				<section>
                	<p>Password</p>
                	<input type="password" id="PaypalPassword"  onChange={this.handlePaypalPassword} placeholder="I think this what it says" required/>
                </section>
				<br />
				<section>
                	<p>First Name</p>
                	<input type="text" id="FirstName"  onChange={this.handleFirstName} placeholder="First name here" required/>
                </section>
				<section>
                	<p>Last Name</p>
                	<input type="text" id="LastName"  onChange={this.handleLastName} placeholder="Last name here" required/>
                </section>
				<section>
                	<p>Address</p>
                	<input type="text" id="address"  onChange={this.handleAddress} placeholder="Address here" required/>
                </section>
				<section>
                	<p>Zip Code</p>
                	<input type="number" id="zip" onChange={this.handleZip} placeholder="123456" required/>
                </section>
				<section>
                	<p>Email</p>
                	<input type="email" id="email"  onChange={this.handleEmail} placeholder="Required Fields" required/>
                </section>
				<input type="Submit" className="submitButton" id="OrderConfirm" defaultValue="Confirm" />
			</form>
		</div>	
	)
}