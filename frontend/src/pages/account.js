import React from 'react';
import UserService from 'services/user.service';
import  { Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Cookies from 'js-cookie';
import history from '../history';

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
        try {
            UserService.isUserLoggedIn()
            .then((response) => {
                this.setState({userFound: true, user: response});
            })
            .catch((error) => {
                this.setState({userFound: false, user: null});

                console.log(error);
               history.push("/login");
            });
        }
        catch(e) {
            console.log(e);
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