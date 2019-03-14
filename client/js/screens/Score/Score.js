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

const Score = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <View style={styles.flex}>
          <Image
            source={require("../../assets/images/main-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.great}>Great Job!</Text>
          <Text style={styles.text}>
            You've mastered many important ways to save energy and reduce waste.
            There are probably more things you can do to help. Start the
            challenge to learn more.
          </Text>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Start Challenge</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// Score.propTypes = {};

export default Score;
