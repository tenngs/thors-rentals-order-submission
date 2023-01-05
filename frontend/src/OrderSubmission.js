import { Component } from 'react';

class OrderSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentId: '', customerId: '', staffId: ''
        };
    }

    // Methods to update equipmentId, CustomerId and staffId state with ids
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

    render() {
        // return this.state.equipmentId ? null : (
        //     <div>
        //         {/* Display equipmentId for testing purposes */}
        //         <p>Equipment ID: {this.state.equipmentId}</p>
        //     </div>
        // );
        return null;
    }
}

export default OrderSubmission;
