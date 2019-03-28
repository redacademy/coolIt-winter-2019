import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
// import PropTypes from "prop-types";

const TakeQuiz = props => {
  let {navigate} = props.navigation;
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.center}>
            <Image
              source={require("../../assets/images/main-logo.png")}
              style={styles.logo}
            />
            <Text style={styles.text}>
              Did you know Canada has one of the highest carbon footprints per
              person?
            </Text>
            <Text style={styles.text}>
              Take the carbon quiz to find out your current impact.
            </Text>
            <TouchableOpacity
              onPress={() => navigate("CarbonQuiz")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Take the Carbon Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Image
            source={require("../../assets/images/valley.png")}
            style={styles.valley}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

// TakeQuiz.propTypes = {};

export default TakeQuiz;
