import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });

    // await promise.then((response) => {
    //   console.log(response);
    //   var promise2 = response.json();
    //   promise2.then((prods) => {
    //     console.log(prods);
    //     this.setState({ products: prods });
    //   });
    // });
  };
}
