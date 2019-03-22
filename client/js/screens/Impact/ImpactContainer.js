import React, { Component } from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import Impact from "./Impact";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

export default class ImpactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null
    };
  }
  render() {
    return (
      <View>
        <Impact />
      </View>
    );
  }
}
