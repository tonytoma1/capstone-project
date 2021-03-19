import React from 'react';

import {connect} from 'react-redux';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import {STORAGE, MODEL, addPhoneComponent} from 'redux-action';
import UserService from 'services/user.service';
import history from '../history';

class ServiceProviderPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            networkProvider: []
        }
    }

    async componentDidMount() {

        try {
          let result = await UserService.getDevicesBasedOnModelName(this.props.model);
          this.setState({networkProvider: result.data});
  
        }
        catch(e) {
            console.log(e);
        }
      }

      
      handleClick(storageSize) {
        this.props.dispatch(addPhoneComponent(STORAGE, storageSize));
        this.props.dispatch(addPhoneComponent(MODEL, this.props.model));
        this.props.dispatch(addPhoneComponent(NETWORK, networkProvider));

        history.push("/condition");
        window.location.reload();
    }


    componentDidMount() {
        
    }

    render() {
        return(
            <div>
               <Header/>
               {/* <p>{this.props.model}</p>
               <p>{this.props.storage}</p> */}


               <div className="device-container">
                                <Breadcrumb className="bc">
                                    
                                        <BreadcrumbItem  >
                                            <Link to="/sell-device" > Device </Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem  >
                                            <Link to="/storage-capacity" > Storage </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem  >
                                            <span  className="current">Provider</span>
                                        </BreadcrumbItem>
                                </Breadcrumb>


                            
                <div className="button-container">

                        
                                <h1>Network Provider</h1>
                                {
                                    this.state.networkProvider.map(data => {
                                        return (
                                            <Button outline color="success" size="lg" className="buttons-storage" onClick={() => this.handleClick(data.networkProvider.networkProvider) }>{data.networkProvider.networkProvider} </Button>
                                        )
                                    })
                                }

                </div>
                </div>          

               <Footer/>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        model: state.model,
        storage: state.storage,
        service_provider: state.service_provider
    };
}

export default connect(mapStateToProps) (ServiceProviderPage);

