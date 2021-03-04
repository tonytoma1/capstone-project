import React from 'react';
import UserService from 'services/user.service';
import  { Link, Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Cookies from 'js-cookie';
import history from '../history';
import Banner from 'images/iconimage.png';
import 'css/user-account.css';

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
    /*
    * Need to add user's name to welcome message. 
    * Add various components 
    */
            return(<div>
                <Header/>
                <div className = "iconImage">
                <img src = {Banner} />
                </div>
                <h1> Welcome to your account, !</h1>
                <div className = "information">
                    <p>User information:</p>
                </div>
                <div className = "orderHistory">
                    <p>Order history:</p>
                </div>
                <Footer/>
               
                </div>   
            );
    
    }
}