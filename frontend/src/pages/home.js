import React from 'react';
// import Header_LP from '../components/common/Header/Header_LP';

import Header_LP from '../components/common/Header/Header';
import Footer from '../components/common/footer/Footer';
import Hompage from '../components/common/Hompage/Homepage';

import FAQ from '../components/fillerpages/FAQ';
import Device from '../components/device/Device';
import Test from '../components/condition/Condition';


export default class Home extends React.Component {


    render() {
        return (
            <div>
                <Header_LP />
                <Hompage />
                
                    

                <FAQ />
               
                <Footer />
            </div>



        );
    }
}