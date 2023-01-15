import React, { Component } from 'react';

import "./TopBar.css";

class TopBar extends Component {
    render() {
        return (

            <div className="top-bar">
                <h1 className="left">Thors Rentals</h1>
                <h2 className="right"> Order Submission</h2>
            </div>
        );
    }
}

export default TopBar;
