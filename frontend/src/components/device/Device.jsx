
import React from 'react';
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

// ->> CSS imports
import './device-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from '../../history';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {connect} from 'react-redux';

import {MODEL, addPhoneComponent} from 'redux-action';


class Device extends React.Component {

    /////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            device: []
        }
    }

    componentDidMount() {
        UserService.getModels()
                    .then((response) => {
                        this.setState({device: response.data});
                    })
                    .catch((error) => {
                        
                    })

    }

     handleClick(modelName) {
        console.log(modelName);

        this.props.dispatch(addPhoneComponent(MODEL, modelName));

        history.push("/storage-capacity");
        window.location.reload();
    }    
    /////////////////////////////////////
    render(){
        return(
            //** html page */
            <div className="device-container">
                

                <Breadcrumb className="bc">
                    
                        <BreadcrumbItem  >
                            <span  className="current">Device</span>
                        </BreadcrumbItem>

                </Breadcrumb>

                <h2> Select Model </h2>

                <div className="selection">
                
                    {this.state.device.map((devicesObj) => {
                        
                        return (
                            <figure className="select-phone-image" onClick={() => this.handleClick(devicesObj.modelName)}
                                    key={devicesObj.modelName}>
                                <img src= {devicesObj.modelImage}/>
                                <p>{devicesObj.modelName}</p>
                            </figure>
                        );        
                     })}

                </div>
            </div>  
        );
    }
}

function mapStateToProps(state) {
    return {
        model: state.model
    };
}

export default connect(mapStateToProps) (Device);