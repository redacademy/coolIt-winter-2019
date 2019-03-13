import React from "react";
import {Text, View, TouchableHighlight, ScrollView} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import PropTypes from "prop-types";

const ActivityModal = ({data, navigation}) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={{marginTop: 50}}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons style={styles.icon} name="ios-close" size={30} color="red" />
    </TouchableHighlight>
    <View style={styles.info}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.activityContainer}>
          <Text>{data.name}</Text>
        </View>
        <Text>{data.description}</Text>
      </ScrollView>
    </View>
  </View>
);

ActivityModal.propTypes = {
  activity: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default ActivityModal;
