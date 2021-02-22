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
        // TODO Fix authentication and check if token is valid.
        var userFound = Cookies.get("jwtToken");

        if(userFound != null) {
            this.setState({userFound: true});
            console.log("user found");
        }
        else {
            this.setState({userFound: false});
            console.log("user not found");
        }
    }

    render() {
        
        

        return(<div>
            <Header/>
            <h1>Account page </h1>
            <Footer/>
            </div>
            
        );
    }
}