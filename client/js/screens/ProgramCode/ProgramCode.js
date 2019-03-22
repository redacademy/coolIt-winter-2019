import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
// import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { withNavigation } from "react-navigation";

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
            <Text style={styles.text}>Please provide:</Text>
          </ImageBackground>
        </View>
        <Form
          onSubmit={async value => {
            try {
              this.setState({ loading: true });
              const result = await this.props.loginMutation({
                variables: {
                  division: value.division,
                  grade: value.grade,
                  programCode: value.programCode,
                  school: value.school,
                  teacher: value.teacher
                }
              });

              const user = result.data.createSchoolInfo;

              await AsyncStorage.setItem("id", user.id);

              this.props.navigation.navigate("AccountCreated");
            } catch (e) {
              console.log(e);
            }
          }}
          render={({ handleSubmit, value, reset }) => (
            <View style={styles.flexContent}>
              <Field name="school">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.form}
                    editable={true}
                    {...input}
                    placeholder="School"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="teacher">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.form}
                    editable={true}
                    {...input}
                    placeholder="Teacher"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="division">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.formShort}
                    editable={true}
                    {...input}
                    placeholder="Division"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="grade">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.formShort}
                    editable={true}
                    {...input}
                    placeholder="Grade"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
              <Field name="code">
                {({ input, meta }) => (
                  <TextInput
                    style={styles.formShort}
                    editable={true}
                    {...input}
                    placeholder="Code"
                    onChangeText={text => this.setState({ text })}
                  />
                )}
              </Field>
            </View>
          )}
        />
        <View style={styles.backgroundBottom}>
          <ImageBackground
            source={require("../../assets/images/background2-bottom.png")}
            style={styles.bottom}
          >
            <TouchableOpacity
              onPress={() => {
                handleSubmit;
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSubmit;
              }}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

// ProgramCode.propTypes = {};

export default compose(
  graphql(AUTHENTICATE_USER),
  withNavigation
)(ProgramCode);
