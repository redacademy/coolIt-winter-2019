import React, {Component} from "react";
import Account from "./Account";
import PropTypes from "prop-types";

class AccountContainer extends Component {
  render() {
    return <Account />;
  }
}

AccountContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default AccountContainer;
