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

    <div className="footer">

      <div className='footer-container'>

        <div className="footer-child">
          <img src={logo} alt="" className="aboutrecommerce"/>
        </div>

        <div className="footer-child">
              <span className="title"> CUSTOMER SERVICE </span>
                <Link to="/about">
                  <span className="content color-content">Contact Us</span>
                </Link>   

                <Link to="/home">
                  <span className="content color-content">FAQ</span>
                </Link>
        </div>

        <div className="footer-child">
        <span className="title"> INFORMATION </span>
          <Link to="/privacypolicy">
          <span className="content color-content">Privacy Policy</span>
          </Link>
              <Link to="termsandconditions">
              <span className="content color-content">Terms & Conditions</span>
              </Link>
        </div>
      </div>

      
      <section className="reserved footer-child">&#169; 2021 Recommerce. All Rights Reserved.</section>
     </div>




    // <div className="footer-position">
    //   <div className='footer-container'>
    //     <Row>
    //       <Col >
    //             <img src={logo} alt="" className="aboutrecommerce"/>
                
    //       </Col>

    //       <Col >

    //           <span className="title"> CUSTOMER SERVICE </span>
    //           <Link to="/about">
    //           <span className="content color-content">Contact Us</span>
    //           </Link>          
    //           <Link to="/home">
    //           <span className="content color-content">FAQ</span>
    //           </Link>


    //       </Col>
    //       <Col >

    //       <span className="title"> INFORMATION </span>
    //       <Link to="/privacypolicy">
    //       <span className="content color-content">Privacy Policy</span>
    //       </Link>
    //           <Link to="termsandconditions">
    //           <span className="content color-content">Terms & Conditions</span>
    //           </Link>
           
    //       </Col>
    //     </Row>

       
    //   </div>
    //   <section className="reserved">&#169; 2021 Recommerce. All Rights Reserved.</section>
     
    // </div>
  )

}

export default Footer;