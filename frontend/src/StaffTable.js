import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderSubmission from './OrderSubmission';
import "./StaffTable.css";

class StaffTable extends Component {
    constructor(props) {
        super(props);
        this.state = { staffPieces: [], selectedStaffId: '', selectedFirstName: '', selectedSurname: '' };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/staff/all')
            .then(response => {
                this.setState({ staffPieces: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleRowClick = (id, firstName, surname) => {
        // Update the customerId in OrderSubmission component
        this.orderSubmission.updateStaffId(id);
        this.setState({ selectedStaffId: id });
        this.setState({ selectedFirstName: firstName });
        this.setState({ selectedSurname: surname });


    }

    render() {
        return (
            <div>
                {/* Pass a reference to the OrderSubmission component to this.orderSubmission */}
                <OrderSubmission ref={(el) => this.orderSubmission = el} />
                <div>
                    <h2 className='heading'>Staff Members</h2>
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
                                <th>Role</th>
                                <th>Employment Type</th>
                                <th>App Access</th>
                                <th>Vaccinated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.staffPieces.map(staff => (
                                <tr key={staff.id} onClick={() => this.handleRowClick(staff.id, staff.firstName, staff.surname)}>
                                    <td>{staff.id}</td>
                                    <td>{staff.firstName}</td>
                                    <td>{staff.surname}</td>
                                    <td>{staff.firstLineAddress}</td>
                                    <td>{staff.postcode}</td>
                                    <td>{staff.city}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.role}</td>
                                    <td>{staff.employmentType}</td>
                                    <td>{staff.appAccess}</td>
                                    <td>{staff.covidVaccinated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.selectedStaffId
                        ? <div className='selected-equipment'>You have selected: First Name: {this.state.selectedFirstName}, Surname: {this.state.selectedSurname} and Staff ID: {this.state.selectedStaffId}</div>
                        : <div className='instructions'>Please choose a staff member that made the sale by clicking on it</div>
                    }
                    {this.state.selectedStaffId
                        ? <Link to="/details"><button className='continue-button'>Continue</button></Link>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default StaffTable;