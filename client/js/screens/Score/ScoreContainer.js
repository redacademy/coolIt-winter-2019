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
    if (!this.state.userId) {
      return <CalculationLoader style={styles.loader} />;
    } else {
      return (
        <Query
          query={gql`
            query quizScore($id: ID!) {
              allUsers(filter: { id: $id }) {
                quizScore
              }
            }
          `}
          variables={{ id: this.state.userId }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <CalculationLoader style={styles.loader} />;
            if (error) return <Text>{error}</Text>;
            if (!data.allUsers) {
              refetch();
              return <CalculationLoader style={styles.loader} />;
            } else {
              return <Score data={data} />;
            }
          }}
        </Query>
      );
    }
  }
}

ScoreContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ScoreContainer;
