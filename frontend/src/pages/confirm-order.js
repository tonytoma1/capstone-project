import React from 'react';
import Footer from '../components/common/footer/Footer';
import Header_LP from '../components/common/Header/Header_LP';
import confirmOrder from '../components/common/order/confirm-order';

function confirmOrder() {
  return (
    <div className="App">
    <Header_LP />
	<confirmOrder />
    <Footer />
    </div>
  );
}

export default confirmOrder;