import React from 'react';
import Footer from './components/common/footer'
import Header_LP from './components/common/Header/Header_LP'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
     <Header_LP />
     <Footer />
     <Home/>
    </div>
  );
}

export default App;
