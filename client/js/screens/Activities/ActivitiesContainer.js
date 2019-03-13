import React, {Component} from "react";
import {formatSessionData} from "../../lib/helpers/dataFormatHelpers";
import Activities from "./Activities";
import PropTypes from "prop-types";

class ActivitiesContainer extends Component {
  render() {
    const allActivities = [
      {
        id: 1,
        value: 50,
        name: "Walking",
        description: "Walking for the environment",
        category: "Travel Smart"
      },
      {
        id: 2,
        value: 50,
        name: "Biking",
        description: "Biking for the environment",
        category: "Travel Smart"
      },
      {
        id: 3,
        value: 50,
        name: "Idle Free",
        description: "Save Gases for Your Vehicle",
        category: "Vehicle"
      }
    ];

    return (
      <Activities
        data={formatSessionData(allActivities)}
        navigation={this.props.navigation}
      />
    );
  }
}

ActivitiesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ActivitiesContainer;
