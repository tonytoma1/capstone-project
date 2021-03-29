import React from 'react'
import AdminService from '../../services/adminservice';
import axios from 'axios';
import { data } from 'jquery';
import { Link } from 'react-router-dom';
import history from '../../history';
import HeaderComponent from './HeaderComponent';
import './table.css' ;

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
        AdminService.viewOrder().then((res) => {
            this.setState({ neworder: res.data,
                            isLoggedIn: true,
                            isLoading: false
                           
            });
            
        }).catch(error => {
            console.log(error);
            history.push("/login");
            window.location.reload();
            
        })
      
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
                                this.state.neworder.map(
                                    neworder =>
                                        <tr key={neworder}>
                                        <td >{neworder.account.username}</td>   
                                        <td>{neworder.devices.deviceCompany.deviceCompanyName}</td>       
                                        <td>{neworder.devices.deviceCondition.conditonName}</td>    
                                        <td>{neworder.devices.model.modelName}</td>    
                                        <td>{neworder.devices.serviceProvider.serviceProviderName}</td>    
                                        <td>{neworder.devices.storageCapacity.storageCapacitySize}</td>     
                                       <td>{neworder.totalPrice}</td>                                        
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
            </div>
        )
}
}


