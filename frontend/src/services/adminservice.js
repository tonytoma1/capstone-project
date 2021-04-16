import axios from "axios";
import Cookies from 'js-cookie';
import * as Constants from 'constants/global-constants';
import jwt_decode from "jwt-decode";
import userService from "./user.service";

class AdminService{


async getAllPerson() {
    const token = Cookies.get(Constants.JWT_TOKEN);
    var jsonResult = {Authorization: 'Bearer '.concat(token)};
    var config = {
        headers: jsonResult
    }

    return await axios.get(Constants.API_URL + "person", config)
}

async verifyAdmin() {
    const token = Cookies.get(Constants.JWT_TOKEN);
    var jsonResult = {Authorization: 'Bearer '.concat(token)};
    var config = {
        headers: jsonResult
    }
    return await axios.get(Constants.API_URL + "account", config);
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