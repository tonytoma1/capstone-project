import React from 'react';
import UserService from 'services/user.service';
import  { Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Cookies from 'js-cookie';

export default class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userFound: true,
            user: null
        }

    }

    componentDidMount() {
        // check to see if the user is logged in
        UserService.isUserLoggedIn()
                    .then((response) => {
                        this.setState({userFound: true, user: response});
                    })
                    .catch((error) => {
                        this.setState({userFound: false, user: null});
                    })
    }

    render() {
        
        const {userFound} = this.state;

        if(!userFound) {
            {/* User isn't found. Send them back to the login screen */}
            return <Redirect to="/login" />
        }
        else {
            return(<div>
                <Header/>
                <h1>Account page </h1>
                <Footer/>
                </div>   
            );
        }
    }
}