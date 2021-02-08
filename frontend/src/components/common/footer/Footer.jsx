import React from 'react';

import './Footer.css';

function Footer () {

  return (

    <section className="footer">
      <hr className="footer-seperator" />

      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-infoname">
              CONTACT US
          </section>
        
          <section className="footer-inforeturns">
            +44 345 678 903
            <br />
            adobexd@gmail.com
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-infoemail">
            CUSTOMER SERVICE
          </section>
          
          <section className="footer-infoterms">
            Ordering/Payment
            <br />
           Shipping
            <br />
            Returns
            <br />
           FAQ
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-infonumber">
            INFORMATION 
          </section>
          
          <section className="footer-infocontact">
            Privacy Policy
            <br />
            Terms and Conditions
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;