import React, {Component} from "react";
import DisconnectModal from "./DisconnectModal";
import PropTypes from "prop-types";

export default class DisconnectModalContainer extends Component {
  render() {
    return <DisconnectModal navigation={this.props.navigation} />;
  }
}

DisconnectModalContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
