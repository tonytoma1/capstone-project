import axios from "axios";
import * as Constants from 'constants/global-constants';


 class AuthenticationService {

    // Attempts to login the user
    async login(user, pass) {
        var loginUrl = Constants.API_URL + "authentication";
        var jsonDataSent = {
            username: user,
            password: pass
        }

      return await axios.post(loginUrl, jsonDataSent);
    }
}

export default new AuthenticationService();