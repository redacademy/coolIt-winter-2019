import React, { Component } from "react";
import { View } from "react-native";
import Planet from "./Planet";

export default class PlanetContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Planet />
      </View>
    );
  }
}
