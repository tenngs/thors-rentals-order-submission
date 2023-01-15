import axios from 'axios';
import moment from 'moment';
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
      inventoryPieces: [],
      customerPieces: [],
      staffPieces: [],
      equipmentId: '',
      make: '',
      model: '',
      pricePerHour: '',
      pricePerDay: '',
      customerId: '',
      customerFirstName: '',
      customerSurname: '',
      customerEmail: '',
      staffId: '',
      staffFirstName: '',
      staffSurname: '',
      rentalHours: '',
      rentalDays: '',
      cost: '',
      returnDateTime: ''
    };
    // bind functions to this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDurationInputChange = this.handleDurationInputChange.bind(this);
    this.calculateAndSetCost = this.calculateAndSetCost.bind(this);
    this.calculateAndSetReturnDateTime = this.calculateAndSetReturnDateTime.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.getAvailableInventory = this.getAvailableInventory.bind(this);
    this.getCustomers = this.getCustomers.bind(this);
    this.getStaff = this.getStaff.bind(this);
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

  handleSubmit() {
    this.calculateAndSetCost();
    this.calculateAndSetReturnDateTime();
  }

  calculateAndSetCost() {
    console.log("calculateAndSetCost CALLED")
    let totalCost = this.state.rentalDays * this.state.pricePerDay + this.state.rentalHours * this.state.pricePerHour
    console.log("I am totalcost ", totalCost);
    this.handleChange("cost", totalCost);
  }

  calculateAndSetReturnDateTime() {
    // use moment.js library to calculate 
    // and set return date and time
    var now = moment();
    this.handleChange("returnDateTime", moment(now).add(this.state.rentalDays, 'days').add(this.state.rentalHours, 'hours').format('YYYY-MM-DD HH:mm:ss'));
  }

  // get all inventory items, staff and customers and
  // initialise them by setting state on componentDidMount()
  componentDidMount() {
    this.getAvailableInventory();
    this.getCustomers();
    this.getStaff();
  }

  getAvailableInventory() {
    axios.get('http://localhost:8080/inventory/all')
      .then(response => {
        this.setState({ inventoryPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCustomers() {
    axios.get('http://localhost:8080/customer/all')
      .then(response => {
        this.setState({ customerPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getStaff() {
    axios.get('http://localhost:8080/staff/all')
      .then(response => {
        this.setState({ staffPieces: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  submitOrder() {
    axios.post('http://localhost:8080/order', {
      rentalHours: this.state.rentalHours,
      rentalDays: this.state.rentalDays,
      cost: this.state.cost,
      returnDateTime: this.state.returnDateTime,
      status: this.state.status,
      inventory: {
        id: this.state.equipmentId
      },
      staff: {
        id: this.state.staffId
      },
      customer: {
        id: this.state.customerId
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  handleCancel() {
    this.setState({
      inventoryPieces: [],
      customerPieces: [],
      staffPieces: [],
      equipmentId: '',
      make: '',
      model: '',
      pricePerHour: '',
      pricePerDay: '',
      customerId: '',
      customerFirstName: '',
      customerSurname: '',
      customerEmail: '',
      staffId: '',
      staffFirstName: '',
      staffSurname: '',
      rentalHours: '',
      rentalDays: '',
      cost: '',
      returnDateTime: ''
    });

    this.getAvailableInventory();
    this.getCustomers();
    this.getStaff();
    this.props.history.push('/');
  }

  // define routes and props that are passed
  // to child components
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
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleDurationInputChange}
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
              submit={this.submitOrder}
              cancel={this.handleCancel}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);




