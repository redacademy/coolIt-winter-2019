import React, {Component} from "react";
import LogIn from "./LogIn";
import PropTypes from "prop-types";

export default class LogInContainer extends Component {
  render() {
    return <LogIn navigation={this.props.navigation} />;
  }
}

LogInContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
