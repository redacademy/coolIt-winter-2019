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
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Text>Login Form</Text>
        <Form
          onSubmit={async value => {
            const result = await this.props.loginMutation({
              variables: { email: value.email, password: value.password }
            });
            const user = result.data.authenticateUser;
            console.log(user);
            // await authenticateUser({
            //   variables: { email: value.email, password: value.password }
            // });
            await AsyncStorage.setItem(user.id, user.token);
            this.props.navigation.navigate("App");
          }}
          render={({ handleSubmit, value, reset }) => (
            <View>
              <Text>email</Text>
              <Field name="email">
                {({ input, meta }) => (
                  <TextInput
                    style={{ borderStyle: "solid", borderWidth: 1 }}
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
                    style={{ borderStyle: "solid", borderWidth: 1 }}
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
