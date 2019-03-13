import React, { Component } from "react";
import { View } from "react-native";
import Heroes from "./Heroes";

export default class HeroesContainer extends Component {
  static navigationOptions = {
    title: "Heroes"
  };

  render() {
    return (
      <View>
        <Heroes />
      </View>
    );
  }
}
