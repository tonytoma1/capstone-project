import React from 'react'
import AdminService from '../../services/adminservice';
import axios from 'axios';
import { data } from 'jquery';
import { Link } from 'react-router-dom';
import history from '../../history';

/*
let a = AdminService.verifyAdmin();
console.log(a);
*/
export default class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            isLoggedIn: false,
            isLoading: true
        }
        this.deletePerson = this.deletePerson.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
    }

    updatePerson(id) {

    }

   async deletePerson(id) {
        await AdminService.deleteEmployee(id).then((res) => {
            window.location.reload();
           
        })
        .catch((error) => {
            console.log("Can't delete person");
            console.log(error);
        }); 
    }

   async componentDidMount() {
        AdminService.verifyAdmin().then((res) => {
            this.setState({ person: res.data,
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
                {this.state.isLoading ? 'Loading...' : <div>
                <h2 className="text-center">Persons Lists</h2>
              
                    <Link to='/add/id'>
                        <button className="btn btn-primary">Add</button>
                    </Link>
               
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>City</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>Email</th>
                                <th>First Name</th>
                                {/* <th>Is Residental</th> */}
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>State</th>
                                <th>Street Address 1</th>
                                <th>Street Address 2</th>
                                <th>Zip</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.person.map(
                                    person =>
                                        <tr key={person.personId}>
                                             <td>{person.personId}</td>
                                            <td>{person.city}</td>
                                            <td>{person.company}</td>
                                            <td>{person.country}</td>
                                            <td>{person.email}</td>
                                            <td>{person.firstName}</td>
                                            {/* <td>{person.residental}</td> */}
                                            <td>{person.lastName}</td>
                                            <td>{person.phone}</td>
                                            <td>{person.state}</td>
                                            <td>{person.streetAddress1}</td>
                                            <td>{person.streetAddress2}</td>
                                            <td>{person.zip}</td>
                                            <td>
                                                <button onClick={() => this.updatePerson(person.personId)} className="btn btn-primary" >Update</button>
                                                <br />
                                                <br />
                                                <button onClick={() => this.deletePerson(person.personId)} className="btn btn-danger" >Delete</button>
                                            </td>
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


