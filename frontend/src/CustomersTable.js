import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CustomersTable.css";

class CustomersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowClicked: false
        };
        this.handleRowClick = this.handleRowClick.bind(this);
    }


    handleRowClick(id, selectedFirstName, selectedSurname, selectedEmail) {
        if (!(this.state.rowClicked))
        {

            this.setState({ rowClicked: true });

        }
        this.props.handleChange("customerId", id);
        this.props.handleChange("customerFirstName", selectedFirstName);
        this.props.handleChange("customerSurname", selectedSurname);
        this.props.handleChange("customerEmail", selectedEmail);
    }

    render() {
        return (
            <div>
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
                            {this.props.customers.map(customer => (
                                <tr key={customer.id} onClick={() => this.handleRowClick(customer.id, customer.firstName, customer.surname, customer.email)}>
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
                    {this.state.rowClicked
                        ? <div className='selected-equipment'>You have selected: First Name: {this.props.selectedFirstName}, Surname: {this.props.selectedSurname} and Customer ID: {this.props.selectedCustomerId}</div>
                        : <div className='instructions'>Please choose a customer by clicking on it</div>

                    }
                    {this.state.rowClicked
                        ? <Link to="/staff"><button className='continue-button'>Continue</button></Link>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default CustomersTable;