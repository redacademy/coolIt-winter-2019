import React, { Component } from "react";
import client from "../js//config/api";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { StatusBar } from "react-native";
import ProgramCode from "./screens/ProgramCode/ProgramCode";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("dark-content", true);
    return (
      <ApolloProvider client={client}>
        <ProgramCode />
      </ApolloProvider>
    );
  }
}
