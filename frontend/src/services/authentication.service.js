import axios from "axios";
const API_URL = "http://localhost:8080/api/";

 class AuthenticationService {

    // Attempts login
    async login(user, pass) {
        var loginUrl = API_URL + "authentication";
        var jsonDataSent = {
            username: user,
            password: pass
        }

      return await axios.post(loginUrl, jsonDataSent);
    }
}

export default new AuthenticationService();