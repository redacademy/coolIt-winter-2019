import React, { Component } from "react";
import DeactivateModal from "./DeactivateModal";
import PropTypes from "prop-types";

export default class DeactivateModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  emailInput = email => {
    this.setState({ email });
  };
  passwordInput = password => {
    this.setState({ password });
  };
  render() {
    return (
      <DeactivateModal
        emailInput={this.emailInput}
        passwordInput={this.passwordInput}
        navigation={this.props.navigation}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

DeactivateModalContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
