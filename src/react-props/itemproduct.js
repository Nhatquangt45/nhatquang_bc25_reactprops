import React, { Component } from "react";
export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={product.image} alt="" />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-price">{product.price + "$"}</p>

              <button
                className="btn btn-success "
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                  this.props.getDetailss(product);
                }}
              >
                {" "}
                Chi Tiết{" "}
              </button>
              <button className="btn btn-dark ">
                Thêm vào giỏ hàng <i className="fa-solid fa-cart-arrow-down" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
