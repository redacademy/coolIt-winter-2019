import React, {Component} from "react";
import Activities from "./Activities";
import {ActivityIndicator} from "react-native";
import {Query} from "react-apollo";
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
            allCategories {
              id
              name
            }
          }
        `}
      >
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator style={styles.loader} />;
          if (error) return console.log(error);
          return (
            <Activities
              navigation={this.props.navigation}
              data={data.allActivities}
              categories={data.allCategories}
              image={imageRelation}
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
