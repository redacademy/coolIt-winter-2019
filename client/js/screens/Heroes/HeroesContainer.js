import React, { Component } from "react";
import { View } from "react-native";
import Heroes from "./Heroes";

export default class HeroesContainer extends Component {
  static navigationOptions = {
    title: "Heroes"
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Heroes />
      </View>
    );
  }
}
