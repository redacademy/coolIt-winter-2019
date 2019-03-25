import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const CalculationModal = props => {
  return (
    <ImageBackground
      source={require("../../assets/images/calculationBG.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.spacer} />
        <View style={styles.modalContainer}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.goBack();
            }}
            style={styles.backButton}
          >
            <Ionicons
              style={styles.icon}
              name="ios-close"
              size={30}
              color="blue"
            />
          </TouchableHighlight>
          <Image
            source={require("../../assets/images/check-icon.png")}
            style={styles.checkmark}
          />
          <View style={styles.textGroup1}>
            <Text style={styles.text}> You have saved </Text>
            <Text style={styles.text}> 50 greenhouse gases </Text>
          </View>
          <View style={styles.textGroup2}>
            <Text style={styles.text}> Check out our new </Text>
            <Text style={styles.text}> reward on the Planet page! </Text>
          </View>
        </View>
        <View style={styles.spacer} />
      </View>
    </ImageBackground>
  );
};

export default CalculationModal;
