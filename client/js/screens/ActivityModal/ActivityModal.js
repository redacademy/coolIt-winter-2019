import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const ADD_ACTIVITY = gql`
  mutation Authenticate($userId: ID!, $date: DateTime!, $activityId: ID!) {
    createActivityLog(userId: $userId, date: $date, activityId: $activityId) {
      id
    }
  }
`;
const ActivityModal = ({ data, navigation, addActivity }) => (
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
        {data.category.name !== "Community Actions" ? (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              const userId = await AsyncStorage.getItem("id");
              console.log(userId);
              console.log(data.date);
              console.log(data.id);
              addActivity({
                variables: { date: data.date, userId, activityId: data.id }
              });

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
        ) : (
          <TouchableOpacity onPress={() => {}} style={styles.dismiss}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  </View>
);

ActivityModal.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default compose(
  graphql(ADD_ACTIVITY, { name: "addActivity" }),
  withNavigation
)(ActivityModal);
