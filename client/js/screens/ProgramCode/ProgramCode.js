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

const AUTHENTICATE_USER = gql`
  mutation Authenticate(
    $division: Int
    $grade: Int
    $programCode: String!
    $school: String
    $teacher: String
  ) {
    createSchoolInfo(
      division: $division
      grade: $grade
      programCode: $programCode
      school: $school
      teacher: $teacher
    ) {
      id
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
    if (!values.school) {
      errors.school = "School name is required";
    }
    if (!values.teacher) {
      errors.teacher = "Teacher name is required";
    }
    if (!values.division) {
      errors.division = "Division is required";
    }
    if (!values.grade) {
      errors.grade = "Grade info is required";
    }
    if (!values.code) {
      errors.code = "Program code is required";
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
              console.log(value);
              // this.setState({ loading: true });
              const result = await this.props.loginMutation({
                variables: {
                  division: parseInt(value.division),
                  grade: parseInt(value.grade),
                  programCode: value.programCode,
                  school: value.school,
                  teacher: value.teacher
                }
              });

              // const user = result.data.createSchoolInfo;

              // await AsyncStorage.setItem("id", user.id);

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
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
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
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
                <Field name="division">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        {...input}
                        placeholder="Division"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
                <Field name="grade">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        {...input}
                        placeholder="Grade"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
                <Field name="programCode">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.formShort}
                        editable={true}
                        {...input}
                        placeholder="Code"
                        onChangeText={text => {
                          this.setState({ text });
                          console.log(this.state);
                        }}
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

// ProgramCode.propTypes = {};

export default compose(graphql(AUTHENTICATE_USER, { name: "loginMutation" }))(
  ProgramCode
);
