import React, {Component} from "react";
import AccountCreated from "./AccountCreated";

export default class AccountCreatedContainer extends Component {
  render() {
    return <AccountCreated navigation={this.props.navigation} />;
  }
}
