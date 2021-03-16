import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import history from '../../history';
import AdminService from '../../services/adminservice';
export default class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoggedIn: false,
            password: "",
            streetAddress1: "",
            streetAddress2: "",
            country: "",
            state: "",
            zip: "",
            city: "",
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
            isResidential: false
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isResidential: e.target.checked })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/account/register", this.state)
            .then(response => {
                console.log(response);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })

    }

    componentDidMount() {
        AdminService.verifyAdmin().then((res) => {
            this.setState({ person: res.data,
                            isLoggedIn: true,
                            isLoading: false
            });

        }).catch(error => {
            console.log(error);
            history.push("/login");
            window.location.reload();

        })
        
    }



    render() {
        const { password, streetAddress1, streetAddress2, country, state, zip, city, email, firstName, lastName, phone, company, isResidential, isLoading, isLoggedIn } = this.state;
// two conditions 
                  return (  
                <div>
                    {this.state.isLoading ? 'Loading...' : <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Users</h3>
                                <div className="card-body">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <label> Email: </label>
                                            <input type="text" name="email" value={email} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Password: </label>
                                            <input type="text" name="password" value={password} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> streetAddress1: </label>
                                            <input type="text" name="streetAddress1" value={streetAddress1} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> streetAddress2: </label>
                                            <input type="text" name="streetAddress2" value={streetAddress2} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Country: </label>
                                            <input type="text" name="country" value={country} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> State: </label>
                                            <input type="text" name="state" value={state} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Zip: </label>
                                            <input type="text" name="zip" value={zip} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> City: </label>
                                            <input type="text" name="city" value={city} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> FirstName: </label>
                                            <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> LastName: </label>
                                            <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Phone: </label>
                                            <input type="text" name="phone" value={phone} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Company: </label>
                                            <input type="text" name="company" value={company} onChange={this.changeHandler} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label> Is Residential: </label>
                                            <input type="checkbox" name="isResidential" value={isResidential} onChange={this.changeHandler} className="form-control" />
                                        </div>


                                        <button className="btn btn-primary" type="submit">Save</button>
                                        <Link to="/admin">
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                                        </Link>
                                        <Link to="/admin">
                                            <button className="btn btn-success" style={{ marginLeft: "10px" }}>Admin</button>
                                        </Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>}
                    
                </div>
            )
        }
    
}

