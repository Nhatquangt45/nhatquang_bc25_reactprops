import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { detaiProduct } = this.props;
    return (
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Thông tin sản phẩm</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="row">
              <div className="col-md-12">
                <img className="images" alt="" src={detaiProduct.image}></img>
              </div>
              <div className="col-md-11">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>alias :</td>
                      <td>{detaiProduct.alias}</td>
                    </tr>
                    <tr>
                      <td>description :</td>
                      <td>{detaiProduct.description}</td>
                    </tr>
                    <tr>
                      <td>shortDescription:</td>
                      <td>{detaiProduct.shortDescription}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
