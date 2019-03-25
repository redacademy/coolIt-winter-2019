import React, { Component } from "react";
import Account from "./Account";
import PropTypes from "prop-types";
import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount = async () => {
    let id = await AsyncStorage.getItem("id");

    this.setState({ id });
  };
  render() {
    if (this.state.id) {
      return <Account navigation={this.props.navigation} />;
    } else {
      return <ActivityIndicator />;
    }
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default AccountContainer;
