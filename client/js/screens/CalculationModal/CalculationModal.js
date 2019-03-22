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
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.modalContainer}>
        <TouchableHighlight
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.backButton}
        >
          <Ionicons name="ios-close" size={30} color="blue" />
        </TouchableHighlight>
        <Image source={require("../../assets/images/check-icon.png")} />
        <View style={styles.textGrouup}>
          <Text> You have saved </Text>
          <Text> 50 greenhouse gases </Text>
        </View>
        <View>
          <Text> Check out our new </Text>
          <Text> reward on the Planet page! </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CalculationModal;
