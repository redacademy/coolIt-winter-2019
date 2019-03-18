import React from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import CheckBox from "react-native-check-box";
import styles from "./styles";
// import PropTypes from "prop-types";

const Landing = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
          <View style={styles.center}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <View style={styles.flexText}>
              <Text style={styles.text}>
                The main cause of climate change is us. Carbon emissions
                produced from human activities (e.g. driving cars) adds to the
                greenhouse effect, which traps heat and further warms the
                Earth's surface.
              </Text>
              <Text style={styles.join}>
                Join our efforts to make a difference!
              </Text>
              <View style={styles.flex}>
                <CheckBox onClick={() => {}} isChecked={false} />
                <Text style={styles.checkbox}>
                  I am part of the Cool It! program
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.joinUs}>
              <Text style={styles.buttonText}>Join us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.logIn}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <Image
              source={require("../../assets/images/valley.png")}
              style={styles.valley}
            />
          </View>
      </ImageBackground>
    </View>
  );
};

// Landing.propTypes = {};

export default Landing;
