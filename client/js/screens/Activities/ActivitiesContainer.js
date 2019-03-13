import React, {Component} from "react";
import {formatSessionData} from "../../lib/helpers/dataFormatHelpers";
import Activities from "./Activities";
import {ActivityIndicator} from "react-native";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styles from "./styles";

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
          }
        `}
      >
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator style={styles.loader} />;
          if (error) return console.log(error);
          return (
            <Activities
              navigation={this.props.navigation}
              data={formatSessionData(data.allActivities)}
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
