import React from 'react';

import {connect} from 'react-redux';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

class ServiceProviderPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
               <Header/>
               <p>{this.props.model}</p>
               <p>{this.props.storage}</p>
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

