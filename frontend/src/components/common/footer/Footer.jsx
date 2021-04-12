import React from 'react';

import './footer-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

import number from '../../../images/phone-call.png'
import mail from '../../../images/mail.png'
import logo from '../../../images/visuals/about.gif'

function Footer () {

  return (

    <div>
      <div className='footer-container'>
        <Row>
          <Col >
                <img src={logo} alt="" className="aboutrecommerce"/>
                
          </Col>

          <Col >

              <span className="title"> CUSTOMER SERVICE </span>
              <Link to="/about">
              <span className="content color-content">Contact Us</span>
              </Link>          
              {/* <span className="content">Returns</span> */}
              <Link to="/home">
              <span className="content color-content">FAQ</span>
              </Link>


          </Col>
          <Col >

          <span className="title"> INFORMATION </span>
          <Link to="/privacypolicy">
          <span className="content color-content">Privacy Policy</span>
          </Link>
              <Link to="termsandconditions">
              <span className="content color-content">Terms & Conditions</span>
              </Link>
              
             
          </Col>
        </Row>

      </div>

      <section className="reserved">&#169; 2021 Recommerce. All Rights Reserved.</section>
    </div>

































      // <div className='footer-container'>
      //   <Row>
      //     <Col >

      //       <figure className='contact'>
      //         <img src={number} alt=""/>

              
      //         <figcaption> <a href="tel:+800 123 1234">+800 123 1234</a></figcaption>
      //       </figure>

      //       <figure className='contact'>
      //         <img src={mail} alt=""/>
      //         <figcaption> 
      //           <a href="mailto:example.test@email.com">example.test@email.com</a>
      //         </figcaption>
      //       </figure>
      //     </Col>




      //     <Col >.col-6 .col-sm-4</Col>
      //     <Col >.col-sm-4</Col>
      //   </Row>
      // </div>


    // <section className="footer">
    //   <hr className="footer-seperator" />

    //   <section className="footer-info">
    //     <section className="footer-info-left">
    //       <section className="footer-infoname">
    //           CONTACT US
    //       </section>
        
    //       <section className="footer-inforeturns">
    //         +44 345 678 903
    //         <br />
    //         adobexd@gmail.com
    //       </section>
    //     </section>
    //     <section className="footer-info-center">
    //       <section className="footer-infoemail">
    //         CUSTOMER SERVICE
    //       </section>
          
    //       <section className="footer-infoterms">
    //         Ordering/Payment
    //         <br />
    //        Shipping
    //         <br />
    //         Returns
    //         <br />
    //        FAQ
    //       </section>
    //     </section>
    //     <section className="footer-info-right">
    //       <section className="footer-infonumber">
    //         INFORMATION 
    //       </section>
          
    //       <section className="footer-infocontact">
    //         Privacy Policy
    //         <br />
    //         Terms and Conditions
    //       </section>
    //     </section>
    //   </section>
    //   <hr className="footer-seperator" />
    // </section>
  )

}

export default Footer;