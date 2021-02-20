import React from 'react';
import UserService from 'services/user.service';
import  { Redirect } from 'react-router-dom'
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';

export default class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false
        }

    }


    componentDidMount() {
        // check to see if the user is logged in
        var userFound;
        try {
            userFound = UserService.getUsernameFromJwtToken();
            console.log(userFound);

            this.setState({user: true });
        }
        catch(error) {
            // user not logged in.
            this.setState({user: false});
        }
        
    }

    render() {
        
        const user = this.state;

        if(user == false) {
            return <Redirect to="/login"/>
        }

        return(<div>
            <Header/>
            <h1>Account page </h1>
            <Footer/>
            </div>
            
        );
    }
}