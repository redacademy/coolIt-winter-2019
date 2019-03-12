import React, { Component } from "react";

import RootStackNavigator from "./js/navigation/RootStackNavigator";
import { StatusBar } from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return <RootStackNavigator />;
  }
}
