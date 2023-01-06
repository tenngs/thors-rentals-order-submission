import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./InventoryTable.css";
import OrderSubmission from './OrderSubmission';

class InventoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryPieces: [],
            selectedEquipmentId: '',
            selectedMake: '',
            selectedModel: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/inventory/all')
            .then(response => {
                this.setState({ inventoryPieces: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleRowClick = (id, make, model, pricePerHour, pricePerDay) => {
        // update the equipmentId and prices in OrderSubmission component
        this.orderSubmission.updateEquipmentId(id);
        this.orderSubmission.updatePrices(pricePerHour, pricePerDay);
        // update id, make, model in this Component
        this.setState({ selectedEquipmentId: id });
        this.setState({ selectedMake: make });
        this.setState({ selectedModel: model });


    }

    render() {
        return (
            <div>
                {/* pass a reference to OrderSubmission component to this.orderSubmission */}
                <OrderSubmission ref={(el) => this.orderSubmission = el} />
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
                        {this.state.inventoryPieces.map(inventory => (
                            <tr key={inventory.id} onClick={() => this.handleRowClick(inventory.id, inventory.make, inventory.model, inventory.pricePerHour, inventory.pricePerDay)}>
                                <td>{inventory.id}</td>
                                <td>{inventory.make}</td>
                                <td>{inventory.model}</td>
                                <td>£{inventory.pricePerHour}</td>
                                <td>£{inventory.pricePerDay}</td>
                                <td>{inventory.equipmentType === 3 ? 'ATV' : inventory.equipmentType === 2 ? 'Snowboard' : inventory.equipmentType === 1 ? 'Ski' : ''}</td>
                                <td>{inventory.regNumber ? inventory.regNumber : 'N/A'}</td>
                                <td>{inventory.fuelType ? inventory.fuelType : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.selectedEquipmentId
                    ? <div className='selected-equipment'>You have selected: Make: {this.state.selectedMake}, Model: {this.state.selectedModel} and Equipment ID: {this.state.selectedEquipmentId}</div>
                    : <div className='instructions'>Please choose an order item by clicking on it</div>

                }
                {this.state.selectedEquipmentId
                    ? <Link to="/customers"><button className='continue-button'>Continue</button></Link>
                    : null
                }
            </div>
        );
    }
}

export default InventoryTable;