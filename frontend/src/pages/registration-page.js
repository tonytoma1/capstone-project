import React from 'react';
import Footer from '../components/common/footer/Footer'
import HeaderReg from '../components/common/Header/Header_register.component'
import Register from '../components/common/register/Register.component'
function RegistrationPage() {
    return (
        <div className="App">
            <HeaderReg />
            <Register />
            <Footer />
        </div>
    );
}

export default RegistrationPage;