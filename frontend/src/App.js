import React from 'react';
import Footer from './components/common/footer/Footer'
import Header_LP from './components/common/Header/Header_LP'
import Login from './components/common/login/Login'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
     <Header_LP />
     <Login />
     <Footer />
     <Home />
    </div>
  );
}

export default App;
