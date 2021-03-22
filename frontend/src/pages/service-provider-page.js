import React from 'react';

import {connect} from 'react-redux';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import {STORAGE, MODEL, SERVICE_PROVIDER,addPhoneComponent} from 'redux-action';
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

          let serviceProviders = [];
          for(let i = 0; i < result.data.length; i++) {
                serviceProviders.push(result.data[i].serviceProvider.serviceProviderName);   
            }

          let serviceProvidersUniqueArray = Array.from(new Set(serviceProviders));

          this.setState({networkProvider: serviceProvidersUniqueArray});
          
        }
        catch(e) {
            console.log(e);
        }
      }

      
    //   handleClick(storageSize) {
    //     this.props.dispatch(addPhoneComponent(STORAGE, storageSize));
    //     this.props.dispatch(addPhoneComponent(MODEL, this.props.model));
    //     this.props.dispatch(addPhoneComponent(NETWORK, networkProvider));
    //   }

    
      handleClick(service_provider) {
        this.props.dispatch(addPhoneComponent(SERVICE_PROVIDER, service_provider));

        history.push("/condition");
        window.location.reload();
    }

    render() {
        return(
            <div>
               <Header/>
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
                                            <Button outline color="success" size="lg" className="buttons-storage" 
                                            onClick={() => this.handleClick(data) }>
                                                {data}
                                            </Button>
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

