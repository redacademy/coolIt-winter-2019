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
  componentDidMount = async () => {
    await AsyncStorage.getItem("id").then(id => this.setState({ id }));
    let user = await this.props.userQuery.refetch({ id: this.state.id });
    this.setState({ programCode: user.data.allUsers[0].programCode });
  };
  render() {
    if (!this.state.id) {
      return <ActivityIndicator />;
    }
    return (
      <Account
        navigation={this.props.navigation}
        programCode={this.state.programCode}
      />
    );
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default compose(
  graphql(USER_INFO, {
    options: ({ id }) => ({ variables: { id } }),
    name: "userQuery"
  })
)(AccountContainer);
