import React from 'react';

import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

export default class StorageCapcityPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: null
        }
    }

    componentDidMount() {
        
    }



    render() {
        return(
            <div>
                <Header />

                <h1>Storage</h1>

                <Footer />
            </div>
        );
    }
} 

