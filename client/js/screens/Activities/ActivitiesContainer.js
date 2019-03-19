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
      date: null
    };
  }
  componentDidMount() {
    const today = new Date();
    this.setState({ date: today });
  }
  dateHandler = date => {
    this.setState({ date });
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
          return (
            <Activities
              navigation={this.props.navigation}
              data={formatSessionData(data.allActivities)}
              date={this.state.date}
              dateHandler={this.dateHandler}
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
