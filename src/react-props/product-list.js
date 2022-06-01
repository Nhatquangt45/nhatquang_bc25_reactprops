import React, { Component } from "react";
import ProductItem from "./itemproduct";
export default class ProductList extends Component {
  renderListproduct = () => {
    return this.props.productList.map((item) => {
      return (
        <ProductItem
          key={item.id}
          product={item}
          getDetailss={this.props.getDetail}
        />
      );
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">{this.renderListproduct()}</div>
        </div>
      </>
    );
  }
}
