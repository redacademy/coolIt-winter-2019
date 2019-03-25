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
    return (
      <Query
        query={gql`
          query users($id: ID!) {
            allUsers(filter: { id: $id }) {
              id
              programCode
            }
          }
        `}
        variables={{ id: this.state.id }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;

          return <Account navigation={this.props.navigation} data={data} />;
        }}
      </Query>
    );
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default AccountContainer;
