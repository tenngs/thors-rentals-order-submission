import React, { Component } from "react";

import { Link, withRouter } from 'react-router-dom';

import "./LandingPage.css";



class LandingPage extends Component {

    render() {
        return (
            <div className="landing-page">
                <h1>Thors Rentals - Order Submission </h1>

                <p>
                    Welcome to Thors Rentals!
                </p>

                <p>
                    Please submit a new order
                </p>
                <p>Alternatively, please view all submitted orders</p>
                <div className="button-container">
                    <Link to="/inventory">
                        <button className="btn btn-primary">Submit New Order</button>
                    </Link>

                    <button className="btn btn-secondary" onClick={() => this.props.history.push('/orders')}>View All Orders</button>

                </div>
            </div>
        );
    }
}

export default withRouter(LandingPage);