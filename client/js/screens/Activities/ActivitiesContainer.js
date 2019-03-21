import React, { Component } from "react";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import Activities from "./Activities";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styles from "./styles";

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      userId: null
    };
  }
  componentDidMount = async () => {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    console.log(today);
    const userId = await AsyncStorage.getItem("id");
    this.setState({ date: today, userId });
  };
  dateChangeHandler = getNextDay => {
    console.log("pressed");
    let ms;
    getNextDay
      ? (ms = this.state.date.getTime() + 86400000)
      : (ms = this.state.date.getTime() - 86400000);

    let newDay = new Date(ms);
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
            allUsers {
              id
            }
          }
        `}
        variables={{ id: this.state.userId, date: this.state.date }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator style={styles.loader} />;
          if (error) return console.log(error);
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
