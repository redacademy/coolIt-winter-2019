import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Form, Field } from "react-final-form";
import { withNavigation } from "react-navigation";
import styles from "./styles";
// import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Login Form</Text>
        <Form
          onSubmit={value => {
            this.props.loginMutation();
            // await authenticateUser({
            //   variables: { email: value.email, password: value.password }
            // });
            // await AsyncStorage.setItem(
            //   "userToken",
            //   data.authenticateUser.token
            // );
            // this.props.navigation.navigate("App");
          }}
          render={({ handleSubmit, value, reset }) => (
            <View>
              <Text>email</Text>
              <Field name="email">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    {...input}
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Text>password</Text>
              <Field name="password">
                {({ input, meta }) => (
                  <TextInput
                    editable={true}
                    {...input}
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>

              <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

_signInAsync = async () => {
  await AsyncStorage.setItem("userToken", "abc");
  this.props.navigation.navigate("App");
};

export default compose(
  graphql(AUTHENTICATE_USER, { name: "loginMutation" }),
  withNavigation
)(JoinUs);
