import React from "react";
import { View, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";
// import PropTypes from "prop-types";

const Landing = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text>
          The main cause of climate change is us. Carbon emissions produced from
          human activities (e.g. driving cars) adds to the greenhouse effect,
          which traps heat and further warms the Earth's surface.
        </Text>
        <Text>Join our efforts to make a difference!</Text>
        <Text>I am part of the Cool It! program</Text>
        <TouchableOpacity
            onPress={() => {}}
            style={styles.joinUs}
          >
              <Text style={styles.buttonText}>Join us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.logIn}
          >
              <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        <Image
          source={require("../../assets/images/valley.png")}
          style={styles.valley}
        />
      </ImageBackground>
    </View>
  );
};

// Landing.propTypes = {};

export default Landing;
