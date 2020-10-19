import React, { Component } from "react";

export default class SingleProduct extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading" style={{ textAlign:"center" }} >{this.props.user.login.toUpperCase()}</div>
          <div className="panel-body">
            <img
              src={this.props.user.avatar_url}
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
    );
  }
}
