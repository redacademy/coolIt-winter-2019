import React, { Component } from "react";
import Activities from "./Activities";
import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styles from "./styles";

const imageRelation = {
  "Getting Around": require("../../assets/icons/bike.png"),
  Vehicle: require("../../assets/icons/car.png"),
  "Food Choices": require("../../assets/icons/apple.png"),
  "Home Heating": require("../../assets/icons/temp.png"),
  "Refuse, Reduce, Reuse": require("../../assets/icons/recycle.png"),
  "Water Wise": require("../../assets/icons/water.png"),
  "Lighting and Appliances": require("../../assets/icons/light.png"),
  Toxic: require("../../assets/icons/toxic.png"),
  "Community Actions": require("../../assets/icons/community.png")
};
class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      userId: null
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("id").then(value => {
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      this.setState({ date: today, userId: value });
    });
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
          query Activities($id: ID!, $date: DateTime!) {
            allActivities {
              id
              name
              description
              category {
                name
              }
              value
              ghValue
            }
            allCategories {
              id
              name
            }
            allActivityLogs(
              filter: { user: { id: $id }, AND: { date: $date } }
            ) {
              id
              activity {
                name
                value
              }
            }
            allUsers(filter: { id: $id }) {
              point
              ghPoint
            }
          }
        `}
        variables={{ id: this.state.userId, date: this.state.date }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <ActivityIndicator style={styles.loader} />;
          if (error) return <Text>{error}</Text>;

          if (data.allUsers) {
            let currentPoint = data.allUsers[0].point;
            let currentGHPoint = data.allUsers[0].ghPoint;
            let dayPoint = data.allActivityLogs
              .map(a => a.activity.value)
              .reduce((arr, cur) => {
                return arr + cur;
              }, 0);
            return (
              <Activities
                navigation={this.props.navigation}
                date={this.state.date}
                dateChangeHandler={this.dateChangeHandler}
                data={data.allActivities}
                categories={data.allCategories}
                image={imageRelation}
                filteredActivity={data.allActivityLogs}
                refetch={refetch}
                currentPoint={currentPoint}
                dayPoint={dayPoint}
                currentGHPoint={currentGHPoint}
              />
            );
          } else {
            refetch();
            return <Text>{error}</Text>;
          }
        }}
      </Query>
    );
  }
}

ActivitiesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ActivitiesContainer;
