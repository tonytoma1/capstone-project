import React from 'react';
import Footer from '../components/common/footer/Footer'
import Header_LP from '../components/common/Header/Header_LP'
import Login from '../components/common/login/Login'

function LoginPage() {
  return (
    <div className="App">
     <Header_LP />
     <Login />
     <Footer />
    </div>
  );
}

export default LoginPage;
