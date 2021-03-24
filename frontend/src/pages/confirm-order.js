import React from 'react';
import Footer from '../components/common/footer/Footer';
import Header_LP from '../components/common/Header/Header';
import ConfirmOrderPage from '../components/common/order/confirm-order';

function confirmOrder() {
  return (
    <div>
    <Header_LP />
	<ConfirmOrderPage />
    <Footer />
    </div>
  );
}

export default confirmOrder;