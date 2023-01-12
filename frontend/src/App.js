import axios from 'axios';
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CustomersTable from './CustomersTable';
import InventoryTable from "./InventoryTable";
import LandingPage from "./LandingPage";
import OrderDetails from "./OrderDetails";
import Review from "./Review";
import StaffTable from "./StaffTable";




// All props here
// ---> pass down to other components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryPieces: [], // DONE!
      customerPieces: [], // DONE!
      staffPieces: [], // DONE!
      equipmentId: '', // DONE!
      make: '', // DONE!
      model: '', // DONE!
      pricePerHour: '', // DONE!
      pricePerDay: '', // DONE!
      customerId: '', // DONE!
      customerFirstName: '', // DONE!
      customerSurname: '', // DONE!
      customerEmail: '', // DONE!
      staffId: '', // DONE!
      staffFirstName: '', // DONE!
      staffSurname: '', // DONE!

      // parent component does need to have rentalHours
      // and rentalDays as state
      rentalHours: '', // DONE! - TEST
      rentalDays: '', //DONE! - TEST
      cost: '', //DONE! - TEST
      returnDateTime: '' //DONE! - TEST
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDurationInputChange = this.handleDurationInputChange.bind(this);

  }

  // universal "change state function"
  handleChange(stateKey, value) {
    this.setState({ [stateKey]: value });
  }

  // more compact "change state function" using
  // two arrays
  // handleChange(stateName, stateValue) {
  //   stateName.forEach((name, index) => {
  //     let state = {}
  //     state[name] = stateValue[index]
  //     this.setState(state)
  //   })
  // }

  // usage!
  // this.props.handleChange(["staffId", "staffFirstName", "staffSurname"], [id, selectedFirstName, selectedSurname]);


  handleDurationInputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  // get all inventory items, staff and customers and
  // initialise them by changing state
  componentDidMount() {
    axios.get('http://localhost:8080/inventory/all')
      .then(response => {
        this.setState({ inventoryPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:8080/customer/all')
      .then(response => {
        this.setState({ customerPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:8080/staff/all')
      .then(response => {
        this.setState({ staffPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/inventory' exact>
            <InventoryTable
              handleChange={this.handleChange}
              inventory={this.state.inventoryPieces}
              selectedMake={this.state.make}
              selectedModel={this.state.model}
              selectedEquipmentId={this.state.equipmentId}
            />
          </Route>
          <Route path='/customers' exact>
            <CustomersTable
              handleChange={this.handleChange}
              customers={this.state.customerPieces}
              selectedFirstName={this.state.customerFirstName}
              selectedSurname={this.state.customerSurname}
              selectedCustomerId={this.state.customerId}
            />
          </Route>
          <Route path='/staff' exact>
            <StaffTable
              handleChange={this.handleChange}
              staffInfo={this.state.staffPieces}
              selectedStaffFirstName={this.state.staffFirstName}
              selectedStaffSurname={this.state.staffSurname}
              selectedStaffId={this.state.staffId}
            />
          </Route>
          <Route path='/details' exact>
            <OrderDetails
              handleChange={this.handleChange}
              handleInputChange={this.handleDurationInputChange}
              rentalHours={this.rentalHours}
              rentaldays={this.rentalDays}
              hourlyPrice={this.pricePerHour}
              dailyPrice={this.pricePerDay}
            />
          </Route>
          <Route path='/review' exact>
            <Review
              equipmentId={this.state.equipmentId}
              make={this.state.make}
              model={this.state.model}
              pricePerHour={this.state.pricePerHour}
              pricePerDay={this.state.pricePerDay}
              customerId={this.state.customerId}
              customerFirstName={this.state.customerFirstName}
              customerSurname={this.state.customerSurname}
              customerEmail={this.state.customerEmail}
              staffId={this.state.staffId}
              staffFirstName={this.state.staffFirstName}
              staffSurname={this.state.staffSurname}
              rentalHours={this.state.rentalHours}
              rentalDays={this.state.rentalDays}
              cost={this.state.cost}
              returnDateTime={this.state.returnDateTime}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;




