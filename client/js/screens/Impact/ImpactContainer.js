import React, { Component } from "react";
import { View } from "react-native";

import Impact from "./Impact";

export default class ImpactContainer extends Component {
  static navigationOptions = {
    title: "impact"
  };

  render() {
    return (
      <View>
        <Impact />
      </View>
    );
  }
}
