import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./OrderDetails.css";

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowClicked: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleInputChange = (evt) => {
    //     const { name, value } = evt.target;
    //     this.setState({ [name]: value });
    // }

    handleSubmit(evt) {

        evt.preventDefault();
        // calculate and set return datetime

        const futureDate = new Date();
        futureDate.setHours(futureDate.getHours() + evt.rentalHours);
        futureDate.setDate(futureDate.getDate() + evt.rentalDays);

        // Format the date and time into the desired string format
        const year = futureDate.getFullYear();
        const month = ("0" + (futureDate.getMonth() + 1)).slice(-2);
        const date = ("0" + futureDate.getDate()).slice(-2);
        const hours = ("0" + futureDate.getHours()).slice(-2);
        const minutes = ("0" + futureDate.getMinutes()).slice(-2);
        const seconds = ("0" + futureDate.getSeconds()).slice(-2);
        let result = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
        // set return datetime
        this.props.handleChange("returnDateTIme", result);

        // calculate and set cost function
        let totalCost = this.props.rentaldays * this.props.dailyPrice + this.props.rentalHours * this.props.hourlyPrice
        console.log(totalCost);
        this.props.handleChange("cost", totalCost);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Order Details</h2>
                    <label>
                        Rental Days:
                        {/* TD: Set max values for day and hour  */}
                        <input type="number" name="rentalDays" value={this.props.days} onChange={this.props.handleInputChange} min={0} className="scrollable" />
                    </label>
                    <br />
                    <label>
                        Rental Hours:
                        <input type="number" name="rentalHours" value={this.props.hours} onChange={this.props.handleInputChange} min={0} className="scrollable" />
                    </label>
                    <div className='instructions'>Please use scroll wheels to enter rental duration</div>

                    <br />
                    <Link to='/review'>
                        <button type="submit">Continue</button>
                    </Link>
                    <br />
                </form>
            </div>
        );
    }
}
export default OrderDetails;
