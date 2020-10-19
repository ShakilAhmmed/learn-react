import React, { Component } from "react";
import SingleProduct from "./SingleProduct";

export default class Product extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <div>
        <div className="row">
          {users.map((user, i) => {
            return <SingleProduct user={user} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
