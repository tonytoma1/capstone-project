import AuthenticationService from '../services/authentication.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios.create());

    it('Logins succesfully', () => {
        var replyResponse = AuthenticationService.login("jon", "password");
        

        console.log(replyResponse);
        /*
     var replyResponse = mock.onPost("http://localhost:8080/api/authentication", data).reply(200);
        console.log(replyResponse.data);
        */
    });
