import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import Impact from "./Impact";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const USER_INFO = gql`
  query USER($id: ID!) {
    allUsers(filter: { id: $id }) {
      id
      email
    }
  }
`;

export default class ImpactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null
    };
  }
  componentWillMount = async () => {
    const userID = await AsyncStorage.getItem("id");
    this.setState({ userID });
  };
  render() {
    console.log(this.state.userID);
    return (
      <Query query={USER_INFO} variables={{ id: this.state.userID }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>Error</Text>;
          console.log(data.allUsers[0]);
          return (
            <View>
              <Text>{data.allUsers[0].email}</Text>
              <Impact />
            </View>
          );
        }}
      </Query>
    );
  }
}
