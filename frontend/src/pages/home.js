import React from 'react';
// import Header_LP from '../components/common/Header/Header_LP';

import Header_LP from '../components/common/Header/Header_LP';
import Footer from '../components/common/footer/Footer';


import Device from '../components/device/Device';
import Test from '../components/condition/Condition';


export default class Home extends React.Component {


    render() {
        return(
            <div>
                <Header_LP />
              
                <h1>Home</h1>
                <Footer />
            </div>

            
            
        );
    }
}