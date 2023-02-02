import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./InventoryTable.css";
import TopBar from './TopBar';

class InventoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowClicked: false
        };
        this.handleRowClick = this.handleRowClick.bind(this);
    }


    handleRowClick(id, selectedMake, selectedModel, selectedPricePerHour, selectedPricePerDay) {
        if (!(this.state.rowClicked))
        {
            this.setState({ rowClicked: true });
        }
        // call handleChange from App component function to update its state
        this.props.handleChange("equipmentId", id);
        this.props.handleChange("make", selectedMake);
        this.props.handleChange("model", selectedModel);
        this.props.handleChange("pricePerHour", selectedPricePerHour);
        this.props.handleChange("pricePerDay", selectedPricePerDay);
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <div>
                    <h2 className='heading'>Available Inventory</h2>
                </div>
                <table className='inventory-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Price / Hour</th>
                            <th>Price / Day</th>
                            <th>Equipment Type</th>
                            <th>Registration</th>
                            <th>Fuel Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.inventory.map(inv => (
                            <tr key={inv.id} onClick={() => this.handleRowClick(inv.id, inv.make, inv.model, inv.pricePerHour, inv.pricePerDay)}>
                                <td>{inv.id}</td>
                                <td>{inv.make}</td>
                                <td>{inv.model}</td>
                                <td>£{inv.pricePerHour}</td>
                                <td>£{inv.pricePerDay}</td>
                                <td>{inv.equipmentType === 3 ? 'ATV' : inv.equipmentType === 2 ? 'Snowboard' : inv.equipmentType === 1 ? 'Ski' : ''}</td>
                                <td>{inv.regNumber ? inv.regNumber : 'N/A'}</td>
                                <td>{inv.fuelType ? inv.fuelType : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    this.state.rowClicked
                        ? <div className='selected-equipment'>You have selected: Make: {this.props.selectedMake}, Model: {this.props.selectedModel} and Equipment ID: {this.props.selectedEquipmentId}</div>
                        : <div className='instructions'>Please choose an order item by clicking on a row</div>
                }
                {
                    this.state.rowClicked
                        ? <button className='continue-button' onClick={() => this.props.history.push('/customers')}>Continue</button>
                        : null
                }
            </div >
        );
    }
}


export default withRouter(InventoryTable);
