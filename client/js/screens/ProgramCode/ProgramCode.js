import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
// import PropTypes from "prop-types";

const ProgramCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop}>
        <Image
          source={require("../../assets/images/background2-top.png")}
          style={styles.top}
        />
      </View>
      <View style={styles.flexContent}>
        <Text style={styles.text}>If you are already</Text>
        <Text style={styles.text}>part of the Cool It! Program,</Text>
        <Text style={styles.text}>Please provide:</Text>
        <Form
          onSubmit={() => {}}
          render={() => (
            <form>
              <Field name="school" placeholder="School" />
              <Field name="teacher" placeholder="Teacher" />
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </form>
          )}
        />
      </View>
      <View style={styles.backgroundBottom}>
        <Image
          source={require("../../assets/images/background2-bottom.png")}
          style={styles.bottom}
        />
      </View>
    </View>
  );
};

// ProgramCode.propTypes = {};

export default ProgramCode;
