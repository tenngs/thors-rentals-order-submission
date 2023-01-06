import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CustomersTable from "./CustomersTable";
import InventoryTable from "./InventoryTable";
import LandingPage from "./LandingPage";
import OrderDetails from "./OrderDetails";
import StaffTable from "./StaffTable";



class App extends Component {
  render() {
    return (
      <div className='App'>

        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/inventory' component={InventoryTable} />
          <Route exact path='/customers' component={CustomersTable} />
          <Route exact path='/staff' component={StaffTable} />
          <Route exact path='/details' component={OrderDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;




