import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { FORM_ERROR } from "final-form";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";

const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
import PropTypes from "prop-types";
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false };
  }
  static navigationOptions = {
    title: "Please sign up"
  };

  validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email || values.email === "") {
      errors.email = "Email is required";
    } else if (/.*@.*\..*/.test(values.email) === false) {
      errors.email = "The email format is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
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
              console.log(value);
              const result = await this.props.signupMutation({
                variables: { email: value.email, password: value.password }
              });

              const user = result.data.signupUser;

              await AsyncStorage.setItem("token", user.token);
              await AsyncStorage.setItem("id", user.id);

              this.props.navigation.navigate("ProgramCode", {
                data: { id: user.id, name: value.name }
              });
            } catch (e) {
              return {
                [FORM_ERROR]: "Email is invalid or already registered."
              };
            }
          }}
          validate={this.validate}
          render={({
            handleSubmit,
            pristine,
            invalid,
            hasSubmitErrors,
            submitError
          }) => (
            <View style={styles.flexContent}>
              <Text style={styles.text}>Join us</Text>
              <Field name="name">
                {({ input, meta }) => (
                  <View style={styles.messageBox}>
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Name"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                    {!input.value ? null : (
                      <Icon
                        style={styles.checkmark}
                        size={30}
                        name={"ios-checkmark-circle-outline"}
                        color={colors.green}
                      />
                    )}
                  </View>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <View style={styles.messageBox}>
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Email"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                    {meta.error ? null : (
                      <Icon
                        style={styles.checkmark}
                        size={30}
                        name={"ios-checkmark-circle-outline"}
                        color={colors.green}
                      />
                    )}
                  </View>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <View style={styles.messageBox}>
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                    {!input.value ? null : (
                      <Icon
                        style={styles.checkmark}
                        size={30}
                        name={"ios-checkmark-circle-outline"}
                        color={colors.green}
                      />
                    )}
                  </View>
                )}
              </Field>
              {!pristine && !invalid ? (
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}
                disabled={pristine || invalid}
              >
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.disabled}
                  disabled={pristine || invalid}
                >
                  <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>
              )} 
              {hasSubmitErrors && (
                <Text style={styles.errorMessage}>{submitError}</Text>
              )}
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
JoinUs.propTypes = {
  navigation: PropTypes.object.isRequired,
  signupMutation: PropTypes.func.isRequired
};

export default compose(graphql(AUTHENTICATE_USER, { name: "signupMutation" }))(
  JoinUs
);
