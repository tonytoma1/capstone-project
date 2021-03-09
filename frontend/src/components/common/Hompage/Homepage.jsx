import React from 'react';
import './Hompage-Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Hompage = (props) => {
  return (
    <div>
        <div className='top'>
      <Card className='SD'>
        <CardBody>
          <CardTitle tag="h5">Sell Your Device for Cash</CardTitle>
          <Button>Sell Your Device</Button>
        </CardBody>
      </Card>
      </div>
            <div>
                <h1 className='set'>How it Works</h1>
            </div>
      <div className="box-set">
      <Card className='box'>
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2">Get an instant quote</CardTitle>
          <CardText tag="h5">Fill out your device information as well as key details,you'll get an instance quote</CardText>
        </CardBody>
      </Card>
      <Card className='box'>
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2">Ship your device</CardTitle>
          <CardText tag="h5">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      <Card className='box'>
        <CardBody>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h2">Get paid</CardTitle>
          <CardText tag="h5">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>      
        </CardBody>
      </Card>
</div>
        <div>
        <Card className='box2'>
        <CardBody>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h1">Sell Device</CardTitle>
        </CardBody>
      </Card>
        </div>
    </div>
  );
};

export default Hompage;