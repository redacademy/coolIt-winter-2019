import React from "react";
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import {graphql, compose} from "react-apollo";
import gql from "graphql-tag";
import {Form, Field} from "react-final-form";
import {FORM_ERROR} from "final-form";

const DELETE_USER = gql`
  mutation delete($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

validate = values => {
  const errors = {};

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

const DeleteModal = ({
  navigation,
  disconnect,
  emailInput,
  authenticate,
  passwordInput,
  email,
  password
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.info}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.top}>
              <Text style={styles.header}>
                Are you sure you want to delete your account?
              </Text>
            </View>
            <View style={styles.middle}>
              <Form
                onSubmit={async () => {
                  try {
                    const result = await authenticate({
                      variables: {email, password}
                    });

                    if (result) {
                      await disconnect({
                        variables: {id: result.data.authenticateUser.id}
                      });
                      await AsyncStorage.clear();
                      navigation.navigate("Auth");
                    }
                  } catch (e) {
                    return {
                      [FORM_ERROR]: "Incorrect email and/or password"
                    };
                  }
                }}
                validate={this.validate}
                render={({
                  pristine,
                  invalid,
                  handleSubmit,
                  hasSubmitErrors,
                  submitError
                }) => (
                  <View style={styles.flexContent}>
                    <Field name="email">
                      {({input, meta}) => (
                        <View>
                          <TextInput
                            style={styles.form}
                            editable={true}
                            {...input}
                            placeholder="Email"
                            onChangeText={text => emailInput(text)}
                          />
                          <Text style={styles.error}>
                            {meta.error && meta.touched && meta.error}
                          </Text>
                        </View>
                      )}
                    </Field>
                    <Field name="password">
                      {({input, meta}) => (
                        <View>
                          <TextInput
                            style={styles.form}
                            editable={true}
                            {...input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={text => passwordInput(text)}
                          />
                          <Text style={styles.error}>
                            {meta.error && meta.touched && meta.error}
                          </Text>
                        </View>
                      )}
                    </Field>
                    <View style={styles.buttonAligner}>
                      <TouchableOpacity
                        style={styles.disconnect}
                        onPress={handleSubmit}
                        disabled={pristine || invalid}
                      >
                        <Text style={styles.buttonText}>Confirm</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.disconnect}
                        onPress={() => {
                          navigation.navigate("Account");
                        }}
                      >
                        <Text style={styles.buttonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.errorBox}>
                      {hasSubmitErrors && (
                        <Text style={styles.errorMessage}>{submitError}</Text>
                      )}
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

DeleteModal.propTypes = {
  navigation: PropTypes.object.isRequired,
  disconnect: PropTypes.func.isRequired
};

export default compose(
  graphql(DELETE_USER, {name: "disconnect"}),
  graphql(AUTHENTICATE_USER, {name: "authenticate"})
)(DeleteModal);
