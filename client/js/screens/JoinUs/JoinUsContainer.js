import React, { Component } from "react";
import JoinUs from "./JoinUs";

export default class JoinUsContainer extends Component {
  render() {
    return <JoinUs navigation={this.props.navigation} />;
  }
}
