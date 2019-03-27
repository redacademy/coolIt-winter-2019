import React, { Component } from "react";
import Account from "./Account";
import PropTypes from "prop-types";
import { AsyncStorage, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FullScreenLoader from "../../components/FullScreenLoader";

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userID: null };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("id").then(value => {
      this.setState({ userID: value });
    });
  };
  render() {
    if (this.state.userID) {
      return (
        <Query
          query={gql`
            query User {
              allUsers {
                id
                programCode
              }
            }
          `}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <FullScreenLoader />;
            if (error) return <Text>{error}</Text>;

            if (!this.state.userID) {
              refetch();
              return <FullScreenLoader />;
            } else {
              let currentStudent = data.allUsers.filter(
                a => a.id === this.state.userID
              );

              return (
                <Account
                  navigation={this.props.navigation}
                  currentStudent={currentStudent}
                  refetch={refetch}
                />
              );
            }
          }}
        </Query>
      );
    } else {
      return <FullScreenLoader />;
    }
  }
}
AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default AccountContainer;
