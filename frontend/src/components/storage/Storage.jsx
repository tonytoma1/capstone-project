
import React from 'react';
import UserService from 'services/user.service';
import * as Constants from 'constants/global-constants';

// ->> CSS imports
// import './device-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { List } from 'reactstrap';

import {connect} from 'react-redux';


class Storage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            storage: []
        }
    }
   

    async componentDidMount() {
        let result = await UserService.getDevicesBasedOnModelName(this.props.model);
        this.setState({storage: result.data});

    }

    handleClick = (e) =>{
        
        
    }
    
    /////////////////////////////////////
    render(){
        return(
            //** html page */
            <div className="device-container">
                

                <Breadcrumb className="bc">
                    
                        <BreadcrumbItem  >
                            <Link to="/sell-device" > Device </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem  >
                             <span  className="current">Storage</span>
                        </BreadcrumbItem>
                </Breadcrumb>

                <h2> Select Storage Capacity </h2>

                <div className="selection">


                {
                    this.state.storage.map(data => {
                        return (
                            <button className="buttons" onClick={() => this.handleClick(data.storageCapacity.storageCapacitySize) }>{data.storageCapacity.storageCapacitySize}</button>
                        )
                    })
                }
              
                    
                    

                </div>
            </div>  
            /////////////////////////////////////
        );
    }
}

function mapStateToProps(state) {
    return {
        model: state.model,
        storage: state.storage
    };
}

export default connect(mapStateToProps) (Storage);