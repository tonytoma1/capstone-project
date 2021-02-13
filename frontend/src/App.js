import React from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/login-page'
import HomePage from './pages/home';


function App() {
  return (
    <div className="App">
    <Router>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>

    </Router>
    </div>
  );
}

export default App;
