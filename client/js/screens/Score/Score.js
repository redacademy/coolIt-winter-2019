import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Score = props => {
  let {navigate} = props.navigation;
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.screen}>
        <View style={styles.flex}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/circle-quiz.png")}
              style={styles.logo}
            />
            <Text style={styles.absoluteText}>Your Score</Text>
            <Text style={styles.absoluteNumber}>
              {props.data.allUsers[0].quizScore}
            </Text>
          </View>
          <Text style={styles.great}>Great Job!</Text>
          <Text style={styles.text}>
            You've mastered many important ways to save energy and reduce waste.
            There are probably more things you can do to help. Start the
            challenge to learn more.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate("BeginChallenge")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Challenge</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

Score.propTypes = {
  data: PropTypes.object.isRequired
};

export default Score;
