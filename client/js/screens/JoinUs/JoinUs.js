import React, { Component } from "react";
import {
  View,
  Text,
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
import DateDisplay from "../../components/DateDisplay";
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
    this.state = { text: "", loading: false };
  }
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        {this.state.loading ? <Text>Loading</Text> : null}
        <Text>Login Form</Text>
        <Form
          onSubmit={async value => {
            try {
              this.setState({ loading: true });
              const result = await this.props.loginMutation({
                variables: { email: value.email, password: value.password }
              });

              const user = result.data.authenticateUser;

              await AsyncStorage.setItem("token", user.token);
              await AsyncStorage.setItem("id", user.id);

              this.props.navigation.navigate("App");
            } catch (e) {
              console.log(e);
            }
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
        <DateDisplay />
      </View>
    );
  }
}

export default compose(
  graphql(AUTHENTICATE_USER, { name: "loginMutation" }),
  withNavigation
)(JoinUs);
