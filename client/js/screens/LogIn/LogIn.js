import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
// import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { withNavigation } from "react-navigation";

const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false };
  }
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundTop}>
          <ImageBackground
            source={require("../../assets/images/background2-top.png")}
            style={styles.top}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Image
                source={require("../../assets/images/back.png")}
                style={styles.back}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
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

              this.props.navigation.navigate("Activities");
            } catch (e) {
              console.log(e);
            }
          }}
          render={({ handleSubmit, value, reset }) => (
            <View style={styles.flexContent}>
              <Text style={styles.text}>Log In</Text>
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
                <Text style={styles.buttonText}>Log In</Text>
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
      </View>
    );
  }
}

export default compose(
  graphql(AUTHENTICATE_USER, { name: "loginMutation" }),
  withNavigation
)(LogIn);
