import { Component } from "react";
import "./Review.css";
import TopBar from './TopBar';



class Review extends Component {
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
            </div>
        );
    }
}

export default Review;




// handleSubmit = () => {
//     axios.post('/order', {
//         equipmentId: this.state.equipmentId,
//         customerId: this.state.customerId,
//         staffId: this.state.staffId,
//         rentalHours: this.state.rentalHours,
//         rentalDays: this.state.rentalDays,
//         pricePerHour: this.state.pricePerHour,
//         pricePerDay: this.state.pricePerDay,
//         cost: this.state.cost,
//         returnDateTime: this.state.returnDateTime
//     })
//         .then(() => {
//             this.setState({ redirect: true });

//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

// handleCancel = () => {
//     // Reset all state in OrderSubmission component
//     this.setState({
//         equipmentId: '',
//         customerId: '',
//         staffId: '',
//         rentalHours: '',
//         rentalDays: '',
//         pricePerHour: '',
//         pricePerDay: '',
//         cost: '',
//         returnDateTime: '',
//         reDirect: true
//     });

//     // if user cancels the order
//     // ---> navigate to LandingPage component
//     // this.props.history.push('/');
// }



// render() {
//     if (this.state.reDirect)
//     {
//         return <Redirect to="/" />;
//     }
//     return this.state.showComponent ?
//         (

//             <div className='order-summary'>
//                 <h2>Order Summary</h2>
//                 <p>Equipment ID: {this.state.equipmentId}</p>
//                 <p>Customer ID: {this.state.customerId}</p>
//                 <p>Staff ID: {this.state.staffId}</p>
//                 <p>Rental Hours: {this.state.rentalHours}</p>
//                 <p>Rental Days: {this.state.rentalDays}</p>
//                 <p>Price Per Hour: {this.state.pricePerHour}</p>
//                 <p>Price Per Day: {this.state.pricePerDay}</p>
//                 <p>Cost: {this.state.cost}</p>
//                 <p>Return Date & Time: {this.state.returnDateTime}</p>
//                 <button onClick={this.handleSubmit}>Submit Order</button>
//                 <button onClick={this.handleCancel}>Cancel Order</button>

//             </div>) : <h1> {this.state.showComponent}</h1>
//         ;
// }