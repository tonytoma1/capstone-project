import { render } from '@testing-library/react'
import React from 'react'
import AdminComponent from '../components/admin/AdminComponent';
import Footer from '../components/common/footer/Footer';
import Header from '../components/admin/HeaderComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUserComponent from '../components/admin/CreateUserComponent';
import LoginPage from '../pages/login-page';

export default class AdminPage extends React.Component {
    render() {
        return (
            <div>
               
                    <Header />
                    <div className="container">
                    <AdminComponent />
                    </div>
               
            </div>
        );
    }
}
