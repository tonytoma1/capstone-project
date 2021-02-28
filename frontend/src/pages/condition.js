import React from 'react';
import UserService from 'services/user.service';

export default class Condition extends React.Component {
    constructor(props) {
        super();
        this.state = {
            condition: null
        }
    }

    componentDidMount() {
        UserService.getCondition()
                    .then((response) => {
                        this.setState({condition: response.data});
                    })
                    .catch((error) => {
                        this.setState({condition: null});
                    })
    }


}