import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from '../../history';
import HeaderComponent from './HeaderComponent';
import {Form, Col, Row, Button} from 'react-bootstrap';

import UserService from '../../services/user.service';
import AdminService from '../../services/adminservice';

export default class AddDeviceComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: [],
            service_provider: [],
            model: [],
            condition: [],
            price: '',
            storageSelected: '',
            serviceProviderSelected: '',
            modelSelected: '',
            conditionSelected: '',
            error: false,
            isLoading: true
        }

        this.submitHandler = this.submitHandler.bind(this);
        
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isResidential: e.target.checked })
    }

    
   async submitHandler() {
       
        //e.preventDefault();
        AdminService.addDevice(this.state.modelSelected, this.state.storageSelected, 
            this.state.conditionSelected, this.state.serviceProviderSelected, this.state.price, 1)
            .then((e) => {
                history.push("/adddevice")
                window.location.reload();
            })
            .catch((error)=> {
                this.setState({error: true});
                history.push("/adddevice")
                window.location.reload();
            })
      
     
    }
    async componentDidMount() {

        AdminService.verifyAdmin()
                    .then((response) => {
                        Promise.all([UserService.getStorage(),  UserService.getNetwork(), UserService.getModels(),
                            UserService.getCondition()
                                    ])
                                    .then((values) => {
                                        this.setState({storage: values[0].data,
                                                       service_provider: values[1].data,
                                                      model: values[2].data, 
                                                      condition: values[3].data })
                                    })
                                    .catch((error) => {
                
                                    })
                                    this.setState({isLoading: false});
                    })
                    .catch((error) => {
                        history.push("/")
                        window.location.reload();
                    })
        
       

    }
    
    render() {

        if (this.state.isLoading) {
            return <p>Loading.....</p>
        }

        return (
            <div>
                <HeaderComponent />
                <br />
                <Form>
                    <Form.Group>
                    <Form.Label>Model</Form.Label>
                        <Form.Control as="select" name="modelSelected" onChange={this.changeHandler}>
                            {
                                this.state.model.map((models, index) => {
                                    return (
                                        <option value={index}>{models.modelName}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Storage</Form.Label>
                        <Form.Control as="select" name="storageSelected" onChange={this.changeHandler}>
                            {
                                this.state.storage.map((storage, index) => {
                                    return (
                                        <option value={index}>{storage.storageCapacitySize}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>    

                    <Form.Group>
                    <Form.Label>Service Provider</Form.Label>
                        <Form.Control as="select" name="serviceProviderSelected" onChange={this.changeHandler}>
                            {
                                this.state.service_provider.map((serviceProvider, index) => {
                                    return (
                                        <option value={index}>{serviceProvider.serviceProviderName}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>    

                     <Form.Group>
                    <Form.Label>Condition</Form.Label>
                        <Form.Control as="select" name="conditionSelected" onChange={this.changeHandler}>
                            {
                                this.state.condition.map((condition, index) => {
                                    return (
                                        <option value={index}>{condition.conditonName}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    {this.state.error ? <p style={{color: 'red'}}>Error in adding Device</p> : null}
                    <Button variant="primary" onClick={() => this.submitHandler()} >
                     Add Device
                    </Button>    

                </Form>

            </div>
        )
    }
}
