import { Component } from 'react';

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
            returnDateTIme: ''
        };
    }

    // methods to update equipmentId, CustomerId and staffId state with ids
    // passed from respective Table components 
    updateEquipmentId = (id) => {
        this.setState({ equipmentId: id });
    }

    updateCustomerId = (id) => {
        this.setState({ customerId: id });
    }

    updateStaffId = (id) => {
        this.setState({ staffId: id });
    }

    // methods to update cost, hourly and daily price
    // passed from respective Table components 
    updateCost = (durationDays, durationHours) => {
        // calculate the total cost based on the price per day and price per hour
        this.setState({ cost: durationDays * this.state.pricePerDay + durationHours * this.state.pricePerHour });
    }

    updatePrices = (pricePerHour, pricePerDay) => {
        this.setState({ pricePerHour: pricePerHour });
        this.setState({ pricePerDay: pricePerDay });
    }

    // create rental return datetime from rentalHours and rentalDays 
    updateReturnDateTime = (rentalHours, rentalDays) => {
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
    // };

    // updateReturnDatetime = (dateTime) => {
    //     this.setState({ returnDateTime: dateTime });
    // }



    render() {
        return (null);
    }
}

export default OrderSubmission;
