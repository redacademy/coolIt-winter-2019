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

const Account = ({navigation, currentStudent, refetch}) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };
  console.log(currentStudent);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.itemSeparator} />
          <Text style={styles.description}>Account</Text>
          <View style={styles.itemBottomSeparator} />
          <View style={styles.menu}>
            {currentStudent[0].programCode ? (
              <View>
                <View style={styles.buttonSeparator} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Disconnect", {data: {refetch}});
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
                navigation.navigate("Delete");
              }}
              style={styles.logIn}
            >
              <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <View style={styles.buttonSeparator} />
            <TouchableOpacity onPress={_signOutAsync} style={styles.logIn}>
              <Text style={styles.buttonText}>Log out </Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
          </View>
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

export default Account;
