import { Component } from 'react';
import CustomersTable from './CustomersTable';
import InventoryTable from './InventoryTable';
import OrderDetails from './OrderDetails';
import "./OrderSubmission.css";
import StaffTable from './StaffTable';

class OrderSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentId: '',
            customerId: '',
            staffId: '',
            rentalHours: '',
            rentalDays: '',
            pricePerHour: '',
            pricePerDay: '',
            cost: '',
            returnDateTime: ''

        };
    }

    onEquipmentIdChange = (id) => { this.setState({ equipmentId: id }); }

    handleCustomerIdChange(id) {
        this.setState({ customerId: id });
    }

    handleStaffIdChange(id) {
        this.setState({ staffId: id });
    }

    handleCostChange = (durationDays, durationHours) => {
        // calculate the total cost based on the price per day and price per hour
        this.setState({ cost: durationDays * this.state.pricePerDay + durationHours * this.state.pricePerHour });
    }

    handlePriceChange = (pricePerHour, pricePerDay) => {
        this.setState({ pricePerHour: pricePerHour });
        this.setState({ pricePerDay: pricePerDay });
    }

    handleReturnDateTimeChange = (rentalHours, rentalDays) => {
        // create a new date object and add the specified number of hours and days to it
        const futureDate = new Date();
        futureDate.setHours(futureDate.getHours() + rentalHours);
        futureDate.setDate(futureDate.getDate() + rentalDays);

        // Format the date and time into the desired string format
        const year = futureDate.getFullYear();
        const month = ("0" + (futureDate.getMonth() + 1)).slice(-2);
        const date = ("0" + futureDate.getDate()).slice(-2);
        const hours = ("0" + futureDate.getHours()).slice(-2);
        const minutes = ("0" + futureDate.getMinutes()).slice(-2);
        const seconds = ("0" + futureDate.getSeconds()).slice(-2);

        this.setState({ returnDateTIme: `${year}-${month}-${date} ${hours}:${minutes}:${seconds}` });
    }

    render() {
        return (
            <div>
                <div>
                    < InventoryTable
                        onEquipmentIdChange={this.onEquipmentIdChange}
                        onPriceChange={this.handlePriceChange} />
                </div>
                < CustomersTable onCustomerIdChange={this.handleCustomerIdChange} />
                < StaffTable onStaffIdChange={this.handleStaffIdChange} />
                < OrderDetails onCostChange={this.handleCostChange} onReturnDateTimeChange={this.handleReturnDateTimeChange} />
            </div>
        );

    }
}

export default OrderSubmission;


