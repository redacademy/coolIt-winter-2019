import React, {Component} from "react";
import ActivityModal from "./ActivityModal";
import PropTypes from "prop-types";

export default class ActivityModalContainer extends Component {
  render() {
    const activity = this.props.navigation.getParam("data");
    return <ActivityModal data={activity} navigation={this.props.navigation} />;
  }
}

ActivityModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
