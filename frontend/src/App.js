import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/login-page'
import HomePage from './pages/home';
import AccountPage from './pages/account.js';
import RegistrationPage from './pages/registration-page.js'
import ForgotPasswordPage from './pages/forgot-password-page.js';
import ChangePasswordPage from './pages/change-password-page.js';
import history from './history';
import ConditionPage from './pages/condition';
import StorageCapacityPage from './pages/storage-capacity';
import AboutUsPage from './pages/about-us-page';

import SellDevicePage from 'pages/sell-device-page';

import 'bootstrap/dist/css/bootstrap.min.css';


import {Provider} from 'react-redux';

import {createStore} from 'redux';

import {MODEL, CONDITION, SERVICE_PROVIDER, STORAGE} from 'redux-action';

const currentState = {
  model: '',
  storage: '',
  condition: '', 
  service_provider: '',
  shopping_cart: []
}

function reducer(state = currentState, action) {
  switch(action.type) {
      case MODEL:
        return {
          model: action.payload
        };
      default: 
        return {
          state
        };
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends React.Component {

  render() {
    return(
        <div className="App">
        <Provider store={store} >
          <Router history={history}>
      
            <Switch>
              
              <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/account">
                <AccountPage />
              </Route>
              <Route path="/register">
                <RegistrationPage />
              </Route>
              <Route path="/change-password">
                <ChangePasswordPage />
              </Route>

              <Route path="/sell-device">
                <SellDevicePage/>
              </Route>

              <Route path="/about">
                <AboutUsPage/>
              </Route>

              <Route path="/forgot-password">
                <ForgotPasswordPage />
              </Route>
              
              <Route path="/storage-capacity">
                <StorageCapacityPage/>
              </Route>

              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </Provider>
        </div>
    );
  }
  
}

export default App;
