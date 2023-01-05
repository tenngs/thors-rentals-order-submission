import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CustomersTable.css";
import OrderSubmission from './OrderSubmission';

class CustomersTable extends Component {
    constructor(props) {
        super(props);
        this.state = { customerPieces: [], selectedCustomerId: '', selectedFirstName: '', selectedSurname: '' };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/customer/all')
            .then(response => {
                this.setState({ customerPieces: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleRowClick = (id, firstName, surname) => {
        // Update the customerId in OrderSubmission component
        this.orderSubmission.updateCustomerId(id);
        this.setState({ selectedCustomerId: id });
        this.setState({ selectedFirstName: firstName });
        this.setState({ selectedSurname: surname });


    }

    render() {
        return (
            <div>
                {/* Pass a reference to the OrderSubmission component to this.orderSubmission */}
                <OrderSubmission ref={(el) => this.orderSubmission = el} />
                <div>
                    <h2 className='heading'>Customers </h2>
                    <table className='inventory-table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>Adress</th>
                                <th>Postcode</th>
                                <th>City</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customerPieces.map(customer => (
                                <tr key={customer.id} onClick={() => this.handleRowClick(customer.id, customer.firstName, customer.surname)}>
                                    <td>{customer.id}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.surname}</td>
                                    <td>{customer.firstLineAddress}</td>
                                    <td>{customer.postcode}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.selectedCustomerId
                        ? <div className='selected-equipment'>You have selected: First Name: {this.state.selectedFirstName}, Surname: {this.state.selectedSurname} and Customer ID: {this.state.selectedCustomerId}</div>
                        : <div className='instructions'>Please choose a customer by clicking on it</div>

                    }
                    {this.state.selectedCustomerId
                        ? <Link to="/staff"><button className='continue-button'>Continue</button></Link>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default CustomersTable;