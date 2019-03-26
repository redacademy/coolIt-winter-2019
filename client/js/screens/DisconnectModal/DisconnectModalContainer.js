import React, { Component } from "react";
import DisconnectModal from "./DisconnectModal";
import PropTypes from "prop-types";

export default class DisconnectModalContainer extends Component {
  render() {
    const data = this.props.navigation.getParam("data");
    return <DisconnectModal data={data} navigation={this.props.navigation} />;
  }
}

DisconnectModalContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
