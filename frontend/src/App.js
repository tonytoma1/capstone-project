import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/login-page'
import HomePage from './pages/home';
import AccountPage from './pages/account.js';
import ForgotPasswordPage from './pages/forgot-password-page.js';
import history from './history';


class App extends React.Component {

  render() {
    return(
        <div className="App">
        <Router history={history}>
    
          <Switch>
            
            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/account">
              <AccountPage />
            </Route>

            <Route path="/forgot-password">
              <ForgotPasswordPage />
            </Route>
    
            <Route path="/">
              <HomePage />
            </Route>
    
          </Switch>
    
        </Router>
        </div>
    );
  }
  
}

export default App;
