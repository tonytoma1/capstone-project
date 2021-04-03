import React from 'react'
import AdminService from '../../services/adminservice';
import axios from 'axios';
import { data } from 'jquery';
import { Link } from 'react-router-dom';
import history from '../../history';
import HeaderComponent from './HeaderComponent';
import './table.css' ;
import { ThreeDotsVertical } from 'react-bootstrap-icons';

/*
let a = AdminService.viewOrder();
console.log(a);
*/
export default class ViewOrdersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            neworder: [],
            isLoggedIn: false,
            isLoading: true
        }
        

    }

  

   async componentDidMount() {
       try {
            let items = await AdminService.viewOrder();
            this.setState({neworder: items.data, 
                            isLoggedIn: true,
                            isLoading: false});

            console.log(this.state.neworder);
            
            
       }
        catch(error) {
            console.log(error);
        }
      
    }




    render() {
        const { isLoading, isLoggedIn } = this.state;
        return (  
            <div>
                <HeaderComponent />
                {this.state.isLoading ? 'Loading...' : <div>
                <h2 className="text-center">New OrderLists</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{textAlign: 'center'}} >Email</th>
                                <th>Device Company</th>
                                <th>Device Condition</th>
                                <th>Model Name</th>                               
                                <th>Service Provider</th>
                                <th>Storage Capacity</th>                               
                                <th>Total Price</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.neworder.map((item, index) => {
                                return(
                                    <tr>
                                        <td>{item.clientTemp.email}</td>
                                    
                                        <td>{item.devices.deviceId}</td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>}
            </div>
        )
}
}


