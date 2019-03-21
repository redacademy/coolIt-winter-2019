import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import PropTypes from "prop-types";

const ActivityModal = ({data, navigation}) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons style={styles.icon} name="ios-close" size={30} color="blue" />
    </TouchableHighlight>
    <View style={styles.info}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.activityContainer}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            console.log("activity added");
          }}
        >
          <Ionicons
            style={styles.addIcon}
            name="ios-add-circle-outline"
            size={70}
            color="blue"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);

ActivityModal.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default ActivityModal;
