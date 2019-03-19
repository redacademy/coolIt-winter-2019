import React, { Component } from "react";
import {
  View,
  Text,
  Image,
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
    signupUser(email: $email, password: $password) {
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
    title: "Please sign up"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundTop}>
          <Image
            source={require("../../assets/images/background2-top.png")}
            style={styles.top}
          />
        </View>
        <Form
          onSubmit={async value => {
            try {
              this.setState({ loading: true });
              const result = await this.props.loginMutation({
                variables: { email: value.email, password: value.password }
              });

              const user = result.data.signupUser;

              await AsyncStorage.setItem("token", user.token);
              await AsyncStorage.setItem("id", user.id);

              this.props.navigation.navigate("App");
            } catch (e) {
              console.log(e);
            }
          }}
          render={({ handleSubmit, value, reset }) => (
            <View style={styles.flexContent}>
              <Text style={styles.text}>Join us</Text>
              <Field name="name">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.form}
                    editable={true}
                    {...input}
                    placeholder="Name"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.form}
                    editable={true}
                    {...input}
                    placeholder="Email"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.form}
                    editable={true}
                    {...input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.backgroundBottom}>
          <Image
            source={require("../../assets/images/background2-bottom.png")}
            style={styles.bottom}
          />
        </View>
        {/* <DateDisplay /> */}
      </View>
    );
  }
}

export default compose(
  graphql(AUTHENTICATE_USER, { name: "loginMutation" }),
  withNavigation
)(JoinUs);
