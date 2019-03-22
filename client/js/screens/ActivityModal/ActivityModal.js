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
import PropTypes from "prop-types";
import {graphql, compose} from "react-apollo";
import gql from "graphql-tag";

const ADD_ACTIVITY = gql`
  mutation Authenticate($userId: ID!, $date: DateTime!, $activityId: ID!) {
    createActivityLog(userId: $userId, date: $date, activityId: $activityId) {
      id
    }
  }
`;
const ADD_POINT = gql`
  mutation Authenticate($id: ID!, $point: Int!) {
    updateUser(id: $id, point: $point) {
      id
      point
    }
  }
`;

const ActivityModal = ({data, navigation, addActivity, addPoint}) => (
  <View style={styles.container}>
    {data.category.name !== "Community Actions" ? (
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons style={styles.icon} name="ios-close" size={30} color="blue" />
      </TouchableHighlight>
    ) : (
      <View style={styles.community} />
    )}
    <View style={styles.info}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.activityContainer}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        {data.added ? null : data.category.name !== "Community Actions" ? (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              const userId = await AsyncStorage.getItem("id");

              await addActivity({
                variables: {date: data.date, userId, activityId: data.id}
              });
              await addPoint({
                variables: {id: userId, point: data.currentPoint + data.value}
              });

              await data.refetch();
              navigation.goBack();
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
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.dismiss}
          >
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
  graphql(ADD_ACTIVITY, {
    name: "addActivity"
  }),
  graphql(ADD_POINT, {
    name: "addPoint"
  })
)(ActivityModal);
