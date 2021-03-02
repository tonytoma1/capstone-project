import axios from "axios";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import jwt_decode from "jwt-decode";

/*
* Retrieves the user info from the backend.
*/
class UserService {


    async isUserLoggedIn() {
            /*
             * To verify login
             * 1. Check if there is a jwt token
             * 2. Check if you can retrieve the username from the jwt token
             * 3. Check if you can pull the account information from the backend 
             */

            try {
                // 1. Get the jwt token
                var jwtToken = this.getJwtToken();
                // 2. Check if there is a username asssociated with the jwt token
                var username = this.getUsernameFromJwtToken();
            }
            catch(e) {
                // Authentication for JWT has failed. Person not logged in
                return Promise.reject("JWT or Username invalid");
            }
            
            // 3. Get the account information
          return await this.getAccount(username, jwtToken)
        
        
    }

    // Calls the account end point to retrieve account information.
     getAccount(usernameForAccountWanted, jwtToken) { 
        
        var jsonResult = {Authorization: 'Bearer '.concat(jwtToken)};

        var config = {
            headers: jsonResult,
            params: {
                username: usernameForAccountWanted
            }
        }
        return axios.get(Constants.API_URL.concat("account"), config);
    }

    async getUser() {
        var usernameRetrieved = this.getUsernameFromJwtToken();

        var config = {
            headers: this.authenticationHeader(),
            params: {
                username: usernameRetrieved
            }
        }
        return await axios.get(Constants.API_URL + "account", config)
                           .then((res) => {return res})
                           .catch((res) => {return res});
    }

    /**
     * Updates a user's UUID into the database
     * @param {string} email the account holder's email
     * @param {string} updatedUUID the uuid to be persisted into the database.
     */
    async updateUUID(email, updatedUUID) {
        var config = {
            params: {
                uuid: updatedUUID,
                username: email
                
            }
        };

        return await axios.post(Constants.API_URL + 'account/uuid', {
            uuid: updatedUUID,
            username: email
            
        });
    }

    /*
     * Creates the authentication header so the backend API can verify the JWT Token 
     */
    authenticationHeader() {
        const token = Cookies.get(Constants.JWT_TOKEN);

        var jsonResult = {Authorization: 'Bearer '.concat(token)};

        return jsonResult;
    }

    // Checks if there is a username associated with the JWT token.
    getUsernameFromJwtToken() {
        const token = Cookies.get(Constants.JWT_TOKEN);

        if(token == null) {
            throw 'JWT Token is null';
        }

        var username = jwt_decode(token);

        if(username == null) {
            throw 'Username cannot be decoded from jwt token';
        }

        return username.sub;
    }

    async sendUUIDEmail(email, uuid) {
        return await axios.post(Constants.API_URL +"/account/mail-uuid", {
            email: email, 
            uuid: uuid
        });
    }

    getCondition() {
        return axios.get(Constants.API_URL + "condition");
    }

    saveJwtToken(token) {
        Cookies.set(Constants.JWT_TOKEN, token, {expires: 1});
    }

    getJwtToken() {
        return Cookies.get(Constants.JWT_TOKEN);
    }

    // Original way to check if the user is logged in.
    // Dont use this function. This function is used for testing purposes
    originalWayToTestForUserLogin() {
        try {
            /*
             * To verify login
             * 1. Check if there is a jwt token
             * 2. Check if you can retrieve the username from the jwt token
             * 3. Check if you can pull the account information from the backend 
             */

            // 1. Get the jwt token
            var jwtToken = UserService.getJwtToken();
            // 2. Check if there is a username asssociated with the jwt token
            var username = UserService.getUsernameFromJwtToken();
            
            // 3. Get the account information
            UserService.getAccount(username, jwtToken)
                        .then((response) => {
                            // Account information retrieved. The user was logged in.
                            this.setState({loggedIn: true});
                        })
                        .catch((error) => {
                            // The user wasn't logged in since an error was thrown
                            this.setState({loggedIn: false});
                        })
        }
        catch(error) {
            // An error was thrown, therefore the person is not logged in
            this.setState({loggedIn: false});
        }
    }
}

export default new UserService();