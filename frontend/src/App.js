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
import AdminPage from './pages/admin.page';
import SellDevicePage from 'pages/sell-device-page';
import PrivacyPolicy from './components/fillerpages/PrivacyPolicy';
import TermsConditions from './components/fillerpages/TermsConditions';
import FAQ from './components/fillerpages/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';


import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Persists the redux state after each refresh 
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

import {MODEL, CONDITION, SERVICE_PROVIDER, STORAGE, CART, REMOVE_ITEM, SHIPPING_LABEL, CLEAR} from 'redux-action';
import ServiceProviderPage from 'pages/service-provider-page';
import CreateUserComponent from 'components/admin/CreateUserComponent';
import AddDeviceComponent from 'components/admin/AddDeviceComponent';
import ConfirmOrderPage from 'pages/confirm-order';
import ViewOrdersComponent from 'components/admin/ViewOrders.component';
import Ordering from 'pages/ordering';
import Shipping from 'pages/shipping';

let currentState = {
  model: '',
  storage: '',
  condition: '', 
  service_provider: '',
  shopping_cart: new Array(),
  shipping_label: ''
}

function reducer(state = currentState, action) {
  switch(action.type) {
      case MODEL:
        return {
          model: action.payload,
          storage: state.storage,
          condition: state.condition,
          service_provider: state.service_provider,
          shopping_cart: state.shopping_cart
        };
      case STORAGE: 
      return {
        model: state.model,
        storage: action.payload,
        condition: state.condition,
        service_provider: state.service_provider,
        shopping_cart: state.shopping_cart
      };
      case SERVICE_PROVIDER: 
      return {
        model: state.model,
        storage: state.storage,
        condition: state.condition,
        service_provider: action.payload,
        shopping_cart: state.shopping_cart
      };
      case CONDITION: 
      return {
        model: state.model,
        storage: state.storage,
        condition: action.payload,
        service_provider: state.service_provider,
        shopping_cart: state.shopping_cart
      }
      case CART: 
      return {
        model: state.model,
        storage: state.storage,
        condition: state.condition,
        service_provider: state.service_provider,
        shopping_cart: [...state.shopping_cart, action.payload]
      }

      case REMOVE_ITEM: 
      return {
        model: state.model,
        storage: state.storage,
        condition: state.condition,
        service_provider: state.service_provider,
        shopping_cart: [...state.shopping_cart.slice(0, action.payload),
                        ...state.shopping_cart.slice(action.payload + 1)
                        ]
      }

      case SHIPPING_LABEL:
        return {
          ...state,
          shipping_label: action.payload
        }

        case CLEAR: 
        return {
          model: '',
          storage: '',
          condition: '',
          service_provider: '',
          shopping_cart: new Array(),
          shipping_label: state.shipping_label
        }

        
      

      default: 
        return {
          ...state
        };
  }
}

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
let persistor = persistStore(store);

class App extends React.Component {

  render() {
    return(
        <div className="App">
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>  
              <Switch>
                
                <Route path="/login">
                  <LoginPage />
                </Route>

                <Route path="/admin">
                  <AdminPage />
                </Route>

                <Route path="/account">
                  <AccountPage />
                </Route>
                <Route path="/add" component={CreateUserComponent}></Route>
                <Route path="/vieworders" component={ViewOrdersComponent}></Route>
                <Route path="/adddevice" component={AddDeviceComponent}></Route>
                <Route path="/privacypolicy" component={ PrivacyPolicy}></Route>
                <Route path="/termsandconditions" component={ TermsConditions }></Route>
                <Route path="/faq" component={ FAQ }></Route>
               
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

                <Route path="/service-provider">
                  <ServiceProviderPage/>
                </Route>

                <Route path="/condition">
                  <ConditionPage/>
                </Route>

                <Route path="/confirm-order">
                  <ConfirmOrderPage/>
                </Route>

                <Route path="/ordering">
                  <Ordering />
                </Route>

                <Route path="/shipping" >
                  <Shipping />
                </Route>

                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
        </div>
    );
  }
  
}

export default App;
