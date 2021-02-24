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
            userFound: false,
            user: null
        }

    }


    componentDidMount() {
        // check to see if the user is logged in
        UserService.isUserLoggedIn()
                    .then((response) => {
                        // The user is logged. Retrieve the account information.
                        this.setState({userFound: true, user: response.data});
                    })
                    .catch((error) => {
                        // The user isn't found.
                        this.setState({userFound: false});
                    })
    }

    render() {
        
        const {userFound} = this.state;

        if(!userFound) {
            {/* User isn't found. Send them back to the login screen */}
            return <Redirect to="/login" />
        }

        return(<div>
            <Header/>
            <h1>Account page </h1>
            <Footer/>
            </div>
            
        );
    }
}