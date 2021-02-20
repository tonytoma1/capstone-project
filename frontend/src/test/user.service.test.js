import UserService from '../services/user.service';
import Constants from '../constants/global-constants';
import axios from 'axios';

test('json header works', () => {
    var header = UserService.authenticationHeader();
    expect(header).toBeDefined();
});

test('Username retrived from JWT', () => {
    var username = UserService.getUserByUsername();
    console.log(username);
    expect(username).toEqual("example@example.com");
})