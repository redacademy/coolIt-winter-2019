import React, {Component} from "react";
import DeleteModal from "./DeleteModal";
import PropTypes from "prop-types";

export default class DeleteModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }
  emailInput = email => {
    this.setState({email});
  };
  passwordInput = password => {
    this.setState({password});
  };
  render() {
    return (
      <DeleteModal
        emailInput={this.emailInput}
        passwordInput={this.passwordInput}
        navigation={this.props.navigation}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

DeleteModalContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
