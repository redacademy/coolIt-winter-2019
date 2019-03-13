import React, { Component } from "react";
import { View } from "react-native";
import Activities from "./Activities";

export default class ActivitiesContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Activities />
      </View>
    );
  }
}
