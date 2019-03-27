import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

const ADD_SCHOOL_INFO = gql`
  mutation AddSchoolInfo(
    $division: Int
    $grade: Int
    $programCode: String!
    $school: String
    $teacher: String
    $id: ID!
  ) {
    updateUser(
      id: $id
      programCode: $programCode
      schoolInfo: {
        division: $division
        grade: $grade
        programCode: $programCode
        school: $school
        teacher: $teacher
      }
    ) {
      id
      programCode
      schoolInfo {
        programCode
      }
    }
  }
`;

class ProgramCode extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false };
  }
  static navigationOptions = {
    title: "Please enter your program information"
  };

  validate = values => {
    const errors = {};
    if (!values.programCode) {
      errors.programCode = "Program code is required";
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
            <Text style={styles.text}>If you are already</Text>
            <Text style={styles.text}>part of the Cool It! Program,</Text>
            <Text style={styles.textLast}>Please provide:</Text>
          </ImageBackground>
        </View>
        <Form
          onSubmit={async value => {
            try {
              this.setState({ loading: true });

              let result = await this.props.schoolInfoMutation({
                variables: {
                  id: this.props.data.id,
                  division: parseInt(value.division),
                  grade: parseInt(value.grade),
                  programCode: value.programCode,
                  school: value.school,
                  teacher: value.teacher
                }
              });

              this.props.navigation.navigate("AccountCreated");
            } catch (e) {
              console.log(e);
            }
          }}
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.innerContainer}>
              <View style={styles.flexContent}>
                <Field name="school">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="School"
                        onChangeText={text => this.setState({ text })}
                      />
                    </View>
                  )}
                </Field>
                <Field name="teacher">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Teacher"
                        onChangeText={text => this.setState({ text })}
                      />
                    </View>
                  )}
                </Field>
                <Field name="division">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        maxLength={4}
                        {...input}
                        placeholder="Division"
                        onChangeText={text => this.setState({ text })}
                      />
                    </View>
                  )}
                </Field>
                <Field name="grade">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        maxLength={4}
                        {...input}
                        placeholder="Grade"
                        onChangeText={text => this.setState({ text })}
                      />
                    </View>
                  )}
                </Field>
                <Field name="programCode">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        maxLength={4}
                        {...input}
                        placeholder="Program Code"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
              </View>
              <View>
                {!pristine && !invalid ? (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={pristine || invalid}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Continue</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={pristine || invalid}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Continue</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("AccountCreated");
                  }}
                >
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.backgroundBottom}>
          <ImageBackground
            source={require("../../assets/images/background2-bottom.png")}
            style={styles.bottom}
          />
        </View>
      </View>
    );
  }
}

ProgramCode.propTypes = {
  navigation: PropTypes.object.isRequired,
  loginMutation: PropTypes.func
};

export default compose(
  graphql(ADD_SCHOOL_INFO, { name: "schoolInfoMutation" })
)(ProgramCode);
