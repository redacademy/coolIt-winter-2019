import React, { Component } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import styles from "./styles";
import { colors } from "../../config/styles";

export default class CalculationLoader extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={styles.background}
        >
          <View style={styles.flex}>
            <ActivityIndicator
              style={[styles.indicator, { transform: [{ scale: 3 }] }]}
              size="large"
              color={colors.green}
            />
            <Text style={styles.text}>Calculating your results!</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
