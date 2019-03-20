import React, { Component } from "react";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import Activities from "./Activities";
import { ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styles from "./styles";

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  // componentDidMount() {
  //   const today = this.setState({ date: today });
  // }
  dateChangeHandler = getNextDay => {
    let newDay = new Date();
    getNextDay
      ? newDay.setDate(this.state.date.getDate() + 1)
      : newDay.setDate(this.state.date.getDate() - 1);
    this.setState({ date: newDay });
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allActivities {
              id
              name
              description
              category {
                name
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator style={styles.loader} />;
          if (error) return console.log(error);
          // console.log(this.state.date);
          return (
            <Activities
              navigation={this.props.navigation}
              data={formatSessionData(data.allActivities)}
              date={this.state.date}
              dateChangeHandler={this.dateChangeHandler}
            />
          );
        }}
      </Query>
    );
  }
}

ActivitiesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ActivitiesContainer;
