import React, { Component } from "react";
import Heroes from "./Heroes";
import PropTypes from "prop-types";
import { Query, compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, AsyncStorage } from "react-native";

const USER_PROGRAMCODE = gql`
  query User($id: ID) {
    allUsers(filter: { id: $id }) {
      id
      point
    }
  }
`;
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
    const allHeroes = [
      {
        id: 1,
        point: 2000,
        name: "Tim Nguyen",
        programCode: "12345"
      },
      {
        id: 2,
        point: 1000,
        name: "Steve Choi",
        programCode: "12345"
      },
      {
        id: 3,
        point: 500,
        name: "Victor Guo",
        programCode: "12345"
      },
      {
        id: 4,
        point: 1500,
        name: "Sophie Virtue",
        programCode: "12345"
      },
      { id: 5, point: 400, name: "Jennifer Lam", programCode: "12345" },
      { id: 6, point: 300, name: "Jennifer", programCode: "12345" },
      { id: 7, point: 500, name: "Alex", programCode: "12344" }
    ];
    const currentUser = {
      programCode: "12345"
    };

    const leaderHeroes = allHeroes.filter(
      heroes => heroes.programCode === currentUser.programCode
    );

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
          if (loading) return <ActivityIndicator />;
          if (error) return console.log(error);
          console.log(data.allUsers);
          const currentStudent = data.allUsers.filter(
            a => a.id === this.state.userID
          );
          const listOfStudents = data.allUsers.filter(
            a => a.programCode === currentStudent[0].programCode
          );
          console.log(currentStudent[0].programCode);
          console.log(
            listOfStudents.sort((a, b) => b.point - a.point).slice(0, 5)
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

HeroesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HeroesContainer;
