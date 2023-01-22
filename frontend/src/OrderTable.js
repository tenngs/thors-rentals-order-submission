import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TopBar from './TopBar';


class OrderTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/order/all')
            .then(res => {
                this.setState({ orders: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <h1 className='heading'>All Orders</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Equipment ID</th>
                            <th>Customer Name</th>
                            <th>Staff ID</th>
                            <th>Rental Hours</th>
                            <th>Rental Days</th>
                            <th>Total Cost</th>
                            <th>Return Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.inventory.id}</td>
                                <td>{order.customer.firstName} {order.customer.surname}</td>
                                <td>{order.staff.id}</td>
                                <td>{order.rentalHours}</td>
                                <td>{order.rentalDays}</td>
                                <td>£{order.cost}</td>
                                <td>{order.returnDateTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='button-container'>
                    <button onClick={() => this.props.history.push('/')}>Return to Landing Page</button>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderTable);