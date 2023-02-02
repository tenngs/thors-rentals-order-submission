import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./OrderDetails.css";
import TopBar from './TopBar';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    this.props.handleSubmit();
                    this.props.history.push('/review');
                }}>
                    <h1 className='heading'>Rental Duration</h1>
                    <label>
                        Rental Days:
                        <input type="number" name="rentalDays" value={this.props.days} onChange={this.props.handleInputChange} min={0} className="scrollable" />
                    </label>
                    <br />
                    <label>
                        Rental Hours:
                        <input type="number" name="rentalHours" value={this.props.hours} onChange={this.props.handleInputChange} min={0} className="scrollable" />
                    </label>
                    <div className='instructions'>Please enter rental duration</div>
                    <br />
                    <button type="submit">Continue</button>
                </form>
            </div>
        );
    }
}

export default withRouter(OrderDetails);
