import React from 'react';
import './Hompage-Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import bag from '../../../images/home/bag.png';
import box from '../../../images/home/box.png';
import cash from '../../../images/home/cash.png';


export default class  Homepage extends React.Component{

  goToSell(){
    window.location.href = '/sell-device';
 }

render() {
  return (

    <div className="home-container">

      <div className="home-top">
        <section className="home-top-sell">
          <h5> Sell Your Device for Cash </h5>
          <button onClick={this.goToSell}> Sell </button>
        </section>
      </div>

      <div className="home-bottom">
        <h1 className='how-title'>How it Works</h1>


        <div className="home-cards">

          
          <section className="home-bottom-how">
            <img src={bag} />
            <p className="home-bottom-title"> Get an instant quote </p>
            <p className="home-bottom-description"> Fill out your device information to get an instance quote</p>
          </section>

          <section className="home-bottom-how">
            <img src={box} />
            <p className="home-bottom-title"> Ship your device </p>
            <p className="home-bottom-description">Ship your device for FREE using the provided shipping label</p>
          </section>

          <section className="home-bottom-how">
          <img src={cash} />
          <p className="home-bottom-title"> Get paid </p>
          <p className="home-bottom-description">Get paid once the device has been received and verified</p>
        </section>

        </div>


        
      </div>
    
    
    
    
    
    
    
    </div>
//     <div>
//         <div className='top'>
//       <Card className='SD'>
//         <CardBody>
//           <CardTitle tag="h5">Sell Your Device for Cash</CardTitle>
//           <Button>Sell Your Device</Button>
//         </CardBody>
//       </Card>
//       </div>
//             <div>
//                 <h1 className='set'>How it Works</h1>
//             </div>
//       <div className="box-set">
//       <Card className='box'>
//       <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h2">Get an instant quote</CardTitle>
//           <CardText tag="h5">Fill out your device information as well as key details,you'll get an instance quote</CardText>
//         </CardBody>
//       </Card>
//       <Card className='box'>
//       <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h2">Ship your device</CardTitle>
//           <CardText tag="h5">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//         </CardBody>
//       </Card>
//       <Card className='box'>
//         <CardBody>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//           <CardTitle tag="h2">Get paid</CardTitle>
//           <CardText tag="h5">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>      
//         </CardBody>
//       </Card>
// </div>
//         <div>
//         <Card className='box2'>
//         <CardBody>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//           <CardTitle tag="h1">Sell Device</CardTitle>
//         </CardBody>
//       </Card>
//         </div>
//     </div>
  );
}
}