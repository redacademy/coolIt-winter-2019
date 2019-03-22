import React, { Component } from "react";
import Score from "./Score";
import PropTypes from "prop-types";
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
        query={gql`
          query quizScore($id: ID!) {
            allUsers(id: $id) {
              quizScore
            }
          }
        `}
        variables={{ id: this.state.userId }}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <ActivityIndicator style={styles.loader} />;
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
