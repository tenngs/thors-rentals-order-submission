import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./OrderDetails.css";


class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rentalDays: '',
            rentalHours: ''
        };
    }

    orderSubmission = React.createRef();



    handleInputChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (evt) => {

        evt.preventDefault();
        this.orderSubmission.updatePrices(this.state.rentalDays, this.state.rentalHours);
        // Update the cost and return date & time in the OrderSubmission component
        this.orderSubmission.updateCost(this.state.rentalDays, this.state.rentalHours);
        this.orderSubmission.updateReturnDatetime(this.state.rentalHours, this.state.rentalDays);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Order Details</h2>
                <label>
                    Rental Days:
                    <input type="number" name="rentalDays" value={this.state.rentalDays} onChange={this.handleInputChange} min={0} className="scrollable" />
                </label>
                <br />
                <label>
                    Rental Hours:
                    <input type="number" name="rentalHours" value={this.state.rentalHours} onChange={this.handleInputChange} min={0} className="scrollable" />
                </label>
                <div className='instructions'>Please use scroll wheels to enter rental duration</div>

                <br />
                <Link to="/review">
                    <button type="submit">Continue</button>
                </Link>
                <br />
            </form>
        );
    }
}

{/* <div>
      <div>Total Cost: ${this.orderSubmission.state.cost}</div>
      <div>Return Date & Time: {this.orderSubmission.state.returnDateTime}</div>
    </div> */}

export default OrderDetails;
