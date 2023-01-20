import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TopBar from './TopBar';


class OrderTable extends Component {


    // componentDidMount() {
    //     axios.get('http://localhost:8080/order')
    //         .then(res => {
    //             this.setState({ orders: res.data });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <h1 className='heading'>All Orders</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Equipment ID</th>
                            <th>Customer ID</th>
                            <th>Staff ID</th>
                            <th>Rental Hours</th>
                            <th>Rental Days</th>
                            <th>Total Cost</th>
                            <th>Return Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.inventory.id}</td>
                                <td>{order.customer.id}</td>
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