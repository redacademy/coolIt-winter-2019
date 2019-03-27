import React, { Component } from "react";
import Account from "./Account";
import PropTypes from "prop-types";
import { AsyncStorage, Text } from "react-native";
import { graphql, compose, Query } from "react-apollo";
import gql from "graphql-tag";
import FullScreenLoader from "../../components/FullScreenLoader";
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
            query User($id: ID!) {
              allUsers(filter: { id: $id }) {
                id
                programCode
              }
            }
          `}
          variables={{ id: this.state.userID }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <FullScreenLoader />;
            if (error) return <Text>{error}</Text>;
            if (!data.allUsers) {
              // let currentStudent = data.allUsers.filter(
              //   a => a.id === this.state.userID
              // );
              // console.log(currentStudent);
              refetch();
              return <FullScreenLoader />;
            } else {
              console.log(data.allUsers);

              // let currentStudent = data.allUsers.filter(
              //   a => a.id === this.state.userID
              // );
              // console.log(currentStudent);

              return (
                <Account
                  navigation={this.props.navigation}
                  currentStudent={data.allUsers[0]}
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

// HeroesContainer.propTypes = {
//   navigation: PropTypes.object.isRequired
// };

export default AccountContainer;
