import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import styles from "./styles";

const Accounts = props => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.itemSeparator} />
          <Text style={styles.description}>Account</Text>
          <View style={styles.itemBottomSeparator} />
        </View>

        <View style={styles.menu}>
          <View style={styles.buttonSeparator} />
          <TouchableOpacity onPress={() => {}} style={styles.logIn}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />

          <View style={styles.buttonSeparator} />
          <TouchableOpacity onPress={() => {}} style={styles.logIn}>
            <Text style={styles.buttonText}>
              Disconnect My Account From The Cool It Program
            </Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />

          <View style={styles.buttonSeparator} />
          <TouchableOpacity onPress={() => {}} style={styles.logIn}>
            <Text style={styles.buttonText}>Deactivate Account</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />

          <View style={styles.buttonSeparator} />
          <TouchableOpacity onPress={() => {}} style={styles.logIn}>
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

export default Accounts;
