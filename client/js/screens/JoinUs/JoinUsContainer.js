import React, {Component} from "react";
import JoinUs from "./JoinUs";
import PropTypes from "prop-types";

export default class JoinUsContainer extends Component {
  render() {
    return <JoinUs navigation={this.props.navigation} />;
  }
}

JoinUsContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
