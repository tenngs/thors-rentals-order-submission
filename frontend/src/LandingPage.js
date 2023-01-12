import React, { Component } from "react";


import { Link } from 'react-router-dom';

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
                <Link to="/inventory">
                    <button className="btn btn-primary">Start Order Submission</button>
                </Link>
            </div>
        );
    }
}

export default LandingPage;