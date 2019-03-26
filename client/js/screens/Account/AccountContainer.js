import React, { Component } from "react";
import Account from "./Account";
import PropTypes from "prop-types";
import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const USER_INFO = gql`
  query UserInfo($id: ID!) {
    allUsers(filter: { id: $id }) {
      id
      programCode
    }
  }
`;
class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, programCode: null };
  }

  render() {
    if (!this.state.id === null) {
      return <ActivityIndicator />;
    } else {
      return (
        <Account
          navigation={this.props.navigation}
          programCode={this.state.programCode}
        />
      );
    }
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default AccountContainer;
