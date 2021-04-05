import React, { Component } from 'react'
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import AdminService from '../../services/adminservice';
import './Modal.css';
export default class UpdateModal extends Component {
    constructor(props) {
        super(props);
        let personWanted = this.props.personArray[this.props.personId];
        console.log(personWanted.person.streetAddress1);
        this.state = {
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

        this.updatePerson = this.updatePerson.bind(this);
        
    }


    async updatePerson(e) {
        e.preventDefault();

        AdminService.updatePerson()
                    .then((res) => {
                           
                    })
                    .catch((error) => {


                    })

                    this.props.onHide(); 

                    
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isResidential: e.target.checked })
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Person
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>



                        <div className="card-body">
                            <form onSubmit={(e) => this.updatePerson(e)}>
                            <div className="form-group">
                       
                                    <input type="hidden" name="id" className="" placeholder={this.props.person.personId}  onChange={this.changeHandler}></input>
                                </div>
                          
                                <div className="form-group">
                                    <label>
                                        StreetAddress1
                      </label>
                                    <input type="text" name="streetAddress1" className="" placeholder={this.props.person.streetAddress1}  onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        StreetAddress2
                      </label>
                                    <input type="text" name="streetAddress2" className="" placeholder={this.props.person.streetAddress2} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Country
                      </label>
                                    <input type="text" name="country" className="" placeholder={this.props.person.country} Change={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        State
                      </label>
                                    <input type="text" name="state" className="" placeholder={this.props.person.state} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Zip
                      </label>
                                    <input type="text" name="zip" className="" placeholder={this.props.person.zip} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        City
                      </label>
                                    <input type="text" name="city" className="" placeholder={this.props.person.city} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Email
                      </label>
                                    <input type="email" name="email" className="" placeholder={this.props.person.email} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        FirstName
                      </label>
                                    <input type="text" name="firstName" className="" placeholder={this.props.person.firstName} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        LastName
                      </label>
                                    <input type="text" name="lastName" className="" placeholder={this.props.person.lastName} onChange={this.changeHandler}></input>
                                </div>
                                
                                
                                <div className="form-group">
                                    <label>
                                        Phone
                      </label>
                                    <input type="text" name="phone" className="" placeholder={this.props.person.phone} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Company
                      </label>
                                    <input type="text"  name="company" className="" placeholder={this.props.person.company} onChange={this.changeHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label> Is Residential: </label>
                                    <input type="checkbox" name="isResidential" className="" />
                                </div>

                                <button className="btn btn-info" type="submit">Update</button>
                            </form>
                        </div>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
