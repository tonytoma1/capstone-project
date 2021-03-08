import React from 'react';

import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Device from 'components/device/Device';

export default class SellDevicePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header/>
                <Device/>
                <Footer/>
            </div>
        );
    }
}
