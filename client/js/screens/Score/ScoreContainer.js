import React, { Component } from "react";
import Score from "./Score";
import PropTypes from "prop-types";
import { AsyncStorage, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CalculationLoader from "../../components/CalculationLoader";
import styles from "./styles";
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
          if (loading) return <CalculationLoader style={styles.loader} />;
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
