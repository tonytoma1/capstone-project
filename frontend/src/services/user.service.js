import axios from "axios";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import jwt_decode from "jwt-decode";

/*
* Retrieves the user info from the backend.
*/
class UserService {

    async getUserByUsername() {

        var usernameRetrieved = this.getUsernameFromJwtToken();
        var config = {
            headers: this.authenticationHeader(),
            params: {
                username: usernameRetrieved
            }
        }
        return await axios.get(Constants.API_URL + "account", config)
                           .then(res => {return res})
                           .catch(res => {return res});
    }


    /*
     * Creates the authentication header so the backend API can verify the JWT Token 
     */
    authenticationHeader() {
        const token = Cookies.get(Constants.JWT_TOKEN);

        var jsonResult = {Authorization: 'Bearer ' + token};

        return jsonResult;
    }

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

    saveJwtToken(token) {
        Cookies.set("jwtToken", token, {expires: 1});
    }

    getJwtToken() {
        return Cookies.get("jwtToken");
    }
}

export default new UserService();