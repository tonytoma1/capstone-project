import React from 'react';

import Header_LP from '../components/common/Header/Header_LP';
import Footer from '../components/common/footer/Footer';
import Condition from '../components/condition/Condition';

class Condition extends React.Component {

    render() {
        return(
            <div>
                <Header_LP />
                <Condition />
                <Footer />
            </div>
              );
    }
}