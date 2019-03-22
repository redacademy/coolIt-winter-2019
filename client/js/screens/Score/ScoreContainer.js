import React, { Component } from "react";
import Score from "./Score";
import PropTypes from "prop-types";

import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("id").then(value => {
      this.setState({ userId: value });
    });
  };

  render() {
    return (
      <Query
        variables={{ id: this.state.userId }}
        query={gql`
          query quizScore($id: ID!) {
            allUsers(filter: { id: $id }) {
              quizScore
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;

          return <Score data={data} />;
        }}
      </Query>
    );
  }
}

ScoreContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ScoreContainer;
