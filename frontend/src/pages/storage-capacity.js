import React from 'react';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';
import UserService from 'services/user.service';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


import history from '../history';

import {STORAGE, MODEL, addPhoneComponent} from 'redux-action';
import Storage from 'components/storage/Storage';
import {connect} from 'react-redux';

import {Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'components/storage/storage-css.css'

class StorageCapcityPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            storageSizes: []
        }

    }

   async componentDidMount() {

      try {
        let result = await UserService.getDevicesBasedOnModelName(this.props.model);
    
        let storageArray = [];
        
        for(let i = 0; i < result.data.length; i++) {
                storageArray.push(result.data[i].storageCapacity.storageCapacitySize);   
        }

        let unique = Array.from(new Set(storageArray));

        this.setState({storageSizes: unique});

        
      }
      catch(e) {
          console.log(e);
      }
    }

    handleClick(storageSize) {
        this.props.dispatch(addPhoneComponent(STORAGE, storageSize));

        history.push("/service-provider");
        window.location.reload();
    }

    
    render() {
        return(
            <div >
                <Header />

                <div className="device-container">
                                <Breadcrumb className="bc">
                                    
                                        <BreadcrumbItem  >
                                            <Link to="/sell-device" > Device </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem  >
                                            <span  className="current">Storage</span>
                                        </BreadcrumbItem>
                                </Breadcrumb>


                            
                <div className="button-container">

                        
                            {/* Merge this content to the storage page */}
                                <h1>Storage</h1>
                                {
                                    this.state.storageSizes.map(data => {
                                        return (
                                            <Button outline color="success" size="lg" className="buttons-storage" onClick={() => this.handleClick(data) }>{data} GB</Button>
                                        )
                                    })
                                }

                            </div>
                            
                                
                            {/* <Storage /> */}
                </div>
                <Footer />
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        model: state.model,
        storage: state.storage
    };
}

export default connect(mapStateToProps) (StorageCapcityPage);

