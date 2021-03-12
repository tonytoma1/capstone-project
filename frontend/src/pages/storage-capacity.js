import React from 'react';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';
import UserService from 'services/user.service';

import history from '../history';

import {STORAGE, MODEL, addPhoneComponent} from 'redux-action';
import {connect} from 'react-redux';

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
        this.setState({storageSizes: result.data});

        console.log(this.state.storageSizes[0].storageCapacity.storageCapacitySize);
      }
      catch(e) {
          console.log(e);
      }
    }

    handleClick(storageSize) {
        this.props.dispatch(addPhoneComponent(STORAGE, storageSize));
        this.props.dispatch(addPhoneComponent(MODEL, this.props.model));

        history.push("/service-provider");
        window.location.reload();
    }

    
    render() {
        return(
            <div>
                <Header />

                <h1>Storage</h1>
                {
                    this.state.storageSizes.map(data => {
                        return (
                            <button className="buttons" onClick={() => this.handleClick(data.storageCapacity.storageCapacitySize) }>{data.storageCapacity.storageCapacitySize}</button>
                        )
                    })
                }
                

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

