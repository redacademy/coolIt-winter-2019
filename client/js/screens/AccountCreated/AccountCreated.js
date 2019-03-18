import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
// import PropTypes from "prop-types";
const AccountCreated = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop}>
        <Image
          source={require("../../assets/images/background2-top.png")}
          style={styles.top}
        />
      </View>
      <View style={styles.flexContent}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Image
          source={require("../../assets/images/check-icon.png")}
          style={styles.check}
        />
        <Text style={styles.created}>Your account is created</Text>
      </View>
      <View style={styles.backgroundBottom}>
        <Image
          source={require("../../assets/images/background2-bottom.png")}
          style={styles.bottom}
        />
      </View>
    </View>
  );
};
// AccountCreated.propTypes = {};
export default AccountCreated;
