import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomersList from "./CustomersList";
import NotMatchPage from "./NotMatchPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    return (
      // <React.Fragment>
      //   <NavBar />
      //   {/* <ShoppingCart /> */}
      //   {/* <Login></Login> */}
      //   <Dashboard></Dashboard>
      // </React.Fragment>
      <BrowserRouter>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              exact={true}
              element={
                <Login updateIsLoggedInStatus={this.updateIsLoggedInStatus} />
              }
            />

            <Route path="/dashboard" exact Component={Dashboard} />
            <Route path="/customers" exact Component={CustomersList} />
            <Route path="/cart" exact Component={ShoppingCart} />
            <Route path="*" Component={NotMatchPage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  // this method can be called by child components to update isLoggedIn property of the state
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
