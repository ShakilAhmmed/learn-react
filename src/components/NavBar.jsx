import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    search:''
  }
  handlSearch = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
    this.props.searchUser(this.state.search);
  }
  render() {
    return (
      <div>
        <div className="container">
          <br></br>
            <span>{this.state.search}</span>
            <input className="form-control" name="search" onKeyUp={this.handlSearch} />
          <br></br>
        </div>  
      </div>
    );
  }
}
