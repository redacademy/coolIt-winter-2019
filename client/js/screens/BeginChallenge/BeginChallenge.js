import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
// import PropTypes from "prop-types";

const BeginChallenge = props => {
  let { navigate } = props.navigation;
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.center}>
            <View>
              <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
              />
              <Text style={styles.challenge}>Challenge</Text>
            </View>
            <View style={styles.flexText}>
              <Text style={styles.text}>
                You're ready to begin the challenge!
              </Text>
              <Text style={styles.text}>
                The Cool It! Challenge encourages users to reduce their
                greenhouse gas (GHG) emissions by changing habits, which usually
                takes one month of continuous practice.
              </Text>
              <Text style={styles.text}>
                Record all your actions. Points are awarded according to GHG
                savings and effort required.
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigate('Activities')} style={styles.button}>
              <Text style={styles.buttonText}>Let's begin</Text>
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

// BeginChallenge.propTypes = {};

export default withNavigation(BeginChallenge);
