import React from 'react';
import {Card, CardBody} from 'reactstrap';
import Header_LP from '../components/common/Header/Header_LP';

export default class Home extends React.Component {


    render() {
        return(
            <div>
                <Header_LP />
                <h1>Home</h1>
            </div>
        );
    }
}