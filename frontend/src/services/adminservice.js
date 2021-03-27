import axios from "axios";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import jwt_decode from "jwt-decode";

const apiUrl= 'http://localhost:8080/api/person';
const apiUrl2= 'http://localhost:8080/api/new-orders';
class AdminService{


async verifyAdmin() {
    const token = Cookies.get(Constants.JWT_TOKEN);
    var jsonResult = {Authorization: 'Bearer '.concat(token)};
    var config = {
        headers: jsonResult
    }
    return await axios.get(apiUrl, config);
}

async viewOrder() {
    const token = Cookies.get(Constants.JWT_TOKEN);
    var jsonResult = {Authorization: 'Bearer '.concat(token)};
    var config = {
        headers: jsonResult
    }
    return await axios.get(apiUrl2, config);
}

deleteEmployee(personId){
    return axios.delete(apiUrl + personId);
}



   
   
}

export default new AdminService();