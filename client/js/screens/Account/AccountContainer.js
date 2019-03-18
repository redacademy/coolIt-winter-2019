import React, { Component } from "react";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import Account from "./Account";
import { ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styles from "./styles";

class AccountContainer extends Component {
  render() {
    return <Account />;
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AccountContainer;
