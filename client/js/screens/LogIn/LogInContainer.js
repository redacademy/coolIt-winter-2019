import React, { Component } from "react";
import LogIn from "./LogIn";

export default class LogInContainer extends Component {
  render() {
    return <LogIn navigation={this.props.navigation} />;
  }
}
