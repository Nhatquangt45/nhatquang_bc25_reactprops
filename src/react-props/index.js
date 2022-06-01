import React, { Component } from "react";
import ProductList from "./product-list";
import Modal from "./modal";
import Data from "./data.json";

export default class ShoppingGiay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: Data,
      detaiProduct: Data[0],
    };
  }
  handleDetailproduct = (product) => {
    this.setState({ detaiProduct: product });
  };
  render() {
    const { productList, detaiProduct } = this.state;
    return (
      <>
        <h1 className="title">Shoes Shop</h1>
        <div className="container">
          <div className="row">
            <h4>danh sách sản phẩm:</h4>
            <ProductList
              productList={productList}
              getDetail={this.handleDetailproduct}
            />
            <Modal detaiProduct={detaiProduct} />
          </div>
        </div>
      </>
    );
  }
}
