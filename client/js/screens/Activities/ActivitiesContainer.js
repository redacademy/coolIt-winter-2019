import React, {Component} from "react";
import {formatSessionData} from "../../lib/helpers/dataFormatHelpers";
import Activities from "./Activities";
import {ActivityIndicator} from "react-native";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

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
          console.log(data);
          if (loading)
            return (
              <ActivityIndicator
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            );
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
