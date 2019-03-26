import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
const USER_INFO = gql`
  query UserInfo($id: ID!) {
    allUsers(filter: { id: $id }) {
      id
      programCode
    }
  }
`;

const Account = ({ navigation, programCode }) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.itemSeparator} />
          <Text style={styles.description}>Account</Text>
          <View style={styles.itemBottomSeparator} />
        </View>

        <View style={styles.menu}>
          {programCode ? (
            <View>
              <View style={styles.buttonSeparator} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Disconnect");
                }}
                style={styles.logIn}
              >
                <Text style={styles.buttonText}>
                  Disconnect My Account From The Cool It Program
                </Text>
              </TouchableOpacity>

              <View style={styles.buttonSeparator} />
            </View>
          ) : null}
          <View style={styles.buttonSeparator} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Deactivate");
            }}
            style={styles.logIn}
          >
            <Text style={styles.buttonText}>Deactivate Account</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />
          <View style={styles.buttonSeparator} />
          <TouchableOpacity onPress={_signOutAsync} style={styles.logIn}>
            <Text style={styles.buttonText}>Log out </Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />
        </View>

        <View style={styles.bottom}>
          <Image
            source={require("../../assets/images/valley.png")}
            style={styles.valley}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default compose(
  graphql(USER_INFO, {
    options: ({ id }) => ({ variables: { id } }),
    name: "userQuery"
  })
)(Account);
