import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";

const CalculationModal = props => {
  let data = props.navigation.getParam("data");

  return (
    <ImageBackground
      source={require("../../assets/images/calculationBG.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.spacer} />
        <View style={styles.modalContainer}>
          <TouchableOpacity
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
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/check-icon.png")}
            style={styles.checkmark}
          />
          <View style={styles.textGroup1}>
            <Text style={styles.text}> You have saved </Text>
            <Text style={styles.text}>
              {data.dayGHPoint.toFixed(3)} greenhouse gases
            </Text>
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
CalculationModal.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default CalculationModal;
