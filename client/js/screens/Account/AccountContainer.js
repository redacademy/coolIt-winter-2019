import React, { Component } from "react";
import { View } from "react-native";
import Account from "./Account";

export default class AccountContainer extends Component {
  static navigationOptions = {
    title: "Account"
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Account />
      </View>
    );
  }
}
