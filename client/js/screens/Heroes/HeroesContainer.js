import React, { Component } from "react";
import Heroes from "./Heroes";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import NoProgramCode from "../../components/NoProgramCode";
import { AsyncStorage, Text } from "react-native";
import FullScreenLoader from "../../components/FullScreenLoader";
import styles from "./styles";

class HeroesContainer extends Component {
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
    if (!this.state.userID) {
      return <FullScreenLoader style={styles.loader} />;
    } else {
      return (
        <Query
          query={gql`
            query User {
              allUsers {
                id
                programCode
                name
                point
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <FullScreenLoader style={styles.loader} />;
            if (error) return <Text>{error}</Text>;

            const currentStudent = data.allUsers.filter(
              a => a.id === this.state.userID
            );
            if (!currentStudent[0].programCode) {
              return <NoProgramCode />;
            }
            const listOfStudents = data.allUsers.filter(
              a => a.programCode === currentStudent[0].programCode
            );
            const sortedList = listOfStudents
              .sort((a, b) => b.point - a.point)
              .slice(0, 5);

            return <Heroes data={sortedList} />;
          }}
        </Query>
      );
    }
  }
}

HeroesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HeroesContainer;
