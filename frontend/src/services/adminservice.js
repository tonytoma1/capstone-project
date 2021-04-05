import axios from "axios";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import jwt_decode from "jwt-decode";
import userService from "./user.service";

const apiUrl= 'http://localhost:8080/api/person';
const apiUrl2= 'http://localhost:8080/api/person/new-orders';
let apiUrl3= Constants.API_URL + 'person/deleteperson';
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
    return await axios.get( Constants.API_URL + "new-orders", config);
}

async deleteEmployee(personId){
    const token = Cookies.get(Constants.JWT_TOKEN);

    var jsonResult = {Authorization: 'Bearer '.concat(token)};

    var data = {
        id: personId
    }
    var config = { 
        headers: jsonResult,
        params: {
            id: personId
        }
   }
   
    return await axios.post(Constants.API_URL + "person/deleteperson", {}, config);
}

async updatePerson(person){
    const token = Cookies.get(Constants.JWT_TOKEN);

    var jsonResult = {Authorization: 'Bearer '.concat(token)};

    var config = { 
        headers: jsonResult,
        params: {
            personDTO: person
        }
   }
   
    return await axios.post(Constants.API_URL + "person/updateperson", {}, config);
}


async updateEmployee(personId){
    const token = Cookies.get(Constants.JWT_TOKEN);

    var jsonResult = {Authorization: 'Bearer '.concat(token)};

    var data = {
        id: personId
    }
    var config = { 
        headers: jsonResult,
        params: {
            id: personId
        }
   }
   
    return await axios.post(Constants.API_URL + "person/deleteperson", {}, config);
}

async addDevice(modelId, storageId, conditionId, serviceProviderId, price, deviceCompanyId) {
    const token = Cookies.get(Constants.JWT_TOKEN);

    var jsonResult = {Authorization: 'Bearer '.concat(token)};

    var data = {
        modelId: modelId,
        storageCapacityId: storageId,
        deviceConditionId: conditionId,
        serviceProviderId: serviceProviderId,
        devicePrice: price,
        deviceCompanyId: deviceCompanyId
    }

    var config = { 
        headers: jsonResult,
        params: {
            modelId: modelId,
            storageCapacityId: storageId,
            deviceConditionId: conditionId,
            serviceProviderId: serviceProviderId,
            devicePrice: price
        }
   }

   return await axios.post(Constants.API_URL + "device", data, config);
}


   
   
}

export default new AdminService();