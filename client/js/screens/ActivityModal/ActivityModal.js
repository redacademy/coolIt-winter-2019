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
import {colors} from "../../config/styles";

const ActivityModal = ({data, navigation}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableHighlight
          onPress={() => {
            navigation.goBack();
          }}
          underlayColor={colors.white}
        >
          <Ionicons
            style={styles.icon}
            name="ios-close"
            size={50}
            color={colors.blue}
          />
        </TouchableHighlight>
        <View style={styles.info}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.mainContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{data.name}</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{data.description}</Text>
              </View>
              {data.category.name != "Community Actions" ? (
                <View style={styles.icon}>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                      console.log("activity added");
                    }}
                  >
                    <Ionicons
                      style={styles.addIcon}
                      name="ios-add-circle-outline"
                      size={75}
                      color={colors.blue}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.icon}>
                  <TouchableOpacity
                    style={styles.dismiss}
                    onPress={() => {
                      console.log("activity closed");
                    }}
                  >
                    <Text style={styles.buttonText}>Dismiss</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

ActivityModal.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default ActivityModal;
