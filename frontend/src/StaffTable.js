import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import "./StaffTable.css";
import TopBar from './TopBar';

class StaffTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowClicked: false
        };
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(id, selectedFirstName, selectedSurname) {
        if (!(this.state.rowClicked))
        {
            this.setState({ rowClicked: true });
        }
        this.props.handleChange("staffId", id);
        this.props.handleChange("staffFirstName", selectedFirstName);
        this.props.handleChange("staffSurname", selectedSurname);
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
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
                            {this.props.staffInfo.map(staff => (
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
                    {this.state.rowClicked
                        ? <div className='selected-equipment'>You have selected: First Name: {this.props.selectedStaffFirstName}, Surname: {this.props.selectedStaffSurname} and Staff ID: {this.props.selectedStaffId}</div>
                        : <div className='instructions'>Please choose a staff member submitting the order by clicking on a row</div>
                    }
                    {
                        this.state.rowClicked
                            ? <button className='continue-button' onClick={() => this.props.history.push('/details')}>Continue</button>
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(StaffTable);