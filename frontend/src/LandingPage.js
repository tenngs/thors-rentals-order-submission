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
                    Please start the Order Submission Process by clicking the button to view available inventory
                </p>
                <div className="button-container">
                    <Link to="/inventory">
                        <button className="btn btn-primary">Start Order Submission</button>
                    </Link>
                    {this.props.orderAmount > 0 ?
                        <button className="btn btn-secondary" onClick={() => this.props.history.push('/orders')}>View All Orders</button>
                        : null}
                </div>
            </div>
        );
    }
}

export default withRouter(LandingPage);