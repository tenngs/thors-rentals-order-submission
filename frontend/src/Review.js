import { Component } from "react";
import "./Review.css";
import TopBar from './TopBar';



class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }
    render() {
        return (
            <div>
                <TopBar></TopBar>
                <h1 className="heading">Rental Review</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Equipment ID:</td>
                            <td>{this.props.equipmentId}</td>
                        </tr>
                        <tr>
                            <td>Make:</td>
                            <td>{this.props.make}</td>
                        </tr>
                        <tr>
                            <td>Model:</td>
                            <td>{this.props.model}</td>
                        </tr>
                        <tr>
                            <td>Price per Hour:</td>
                            <td>£{this.props.pricePerHour}</td>
                        </tr>
                        <tr>
                            <td>Price per Day:</td>
                            <td>£{this.props.pricePerDay}</td>
                        </tr>
                        <tr>
                            <td>Customer ID:</td>
                            <td>{this.props.customerId}</td>
                        </tr>
                        <tr>
                            <td>Customer First Name:</td>
                            <td>{this.props.customerFirstName}</td>
                        </tr>
                        <tr>
                            <td>Customer Surname:</td>
                            <td>{this.props.customerSurname}</td>
                        </tr>
                        <tr>
                            <td>Customer Email:</td>
                            <td>{this.props.customerEmail}</td>
                        </tr>
                        <tr>
                            <td>Staff ID:</td>
                            <td>{this.props.staffId}</td>
                        </tr>
                        <tr>
                            <td>Staff First Name:</td>
                            <td>{this.props.staffFirstName}</td>
                        </tr>
                        <tr>
                            <td>Staff Surname:</td>
                            <td>{this.props.staffSurname}</td>
                        </tr>
                        <tr>
                            <td>Rental Hours:</td>
                            <td>{this.props.rentalHours}</td>
                        </tr>
                        <tr>
                            <td>Rental Days:</td>
                            <td>{this.props.rentalDays}</td>
                        </tr>
                        <tr>
                            <td>Total Cost:</td>
                            <td>£{this.props.cost}</td>
                        </tr>
                        <tr>
                            <td>Return Date & Time:</td>
                            <td>{this.props.returnDateTime}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='button-container'>
                    <button onClick={this.props.submit} className='submit-button'>Submit</button>
                    <button onClick={this.props.cancel} className='cancel-button'>Cancel</button>
                </div>
                <div>
                    {this.props.showModal ? (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2 className="modal-heading">Order Submitted!</h2>
                                <p className="modal-text">Please press OK to navigate to Landing Page</p>
                                <button className="modal-button" onClick={this.props.handleModalClose}>OK</button>
                            </div>
                        </div>
                    ) : null}

                </div>
            </div>
        );
    }
}

export default Review;

