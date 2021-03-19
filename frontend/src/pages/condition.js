import React from 'react';
import UserService from 'services/user.service';

import Header_LP from '../components/common/Header/Header';
import Footer from '../components/common/footer/Footer';
import Condition from '../components/condition/Condition';


export default class ConditionPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            condition: null
        }
    }

    componentDidMount() {

    }


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