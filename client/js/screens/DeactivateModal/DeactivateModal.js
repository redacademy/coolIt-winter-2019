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
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Form, Field } from "react-final-form";

const DEACTIVATE_USER = gql`
  mutation deactivate($id: ID!) {
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
const DeactivateModal = ({
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
            <Text style={styles.header}>
              Are you sure you want to deactivate your account from the Cool It!
              Program?
            </Text>
            <Form
              onSubmit={async value => {}}
              validate={this.validate}
              render={({
                handleSubmit,
                pristine,
                invalid,
                hasSubmitErrors,
                submitError
              }) => (
                <View style={styles.flexContent}>
                  <Field name="email">
                    {({ input, meta }) => (
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
                    {({ input, meta }) => (
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
                      onPress={async () => {
                        try {
                          const result = await authenticate({
                            variables: { email, password }
                          });
                          console.log();

                          if (result) {
                            await disconnect({
                              variables: { id: result.data.authenticateUser.id }
                            });
                            await AsyncStorage.clear();
                            navigation.navigate("Auth");
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      }}
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
                </View>
              )}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

DeactivateModal.propTypes = {
  navigation: PropTypes.object.isRequired,
  disconnect: PropTypes.func.isRequired
};

export default compose(
  graphql(DEACTIVATE_USER, { name: "disconnect" }),
  graphql(AUTHENTICATE_USER, { name: "authenticate" })
)(DeactivateModal);
