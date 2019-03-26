import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const DISCONNECT_ACCOUNT = gql`
  mutation updateUser($id: ID!) {
    updateUser(programCode: "", id: $id) {
      id
    }
  }
`;
const DisconnectModal = ({ navigation, disconnect }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.info}>
          <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.top}>
            <Text style={styles.header}>
              Are you sure you want to disconnect your account from the Cool It!
              Program?
            </Text>
            </View>
            <View style={styles.buttonAligner}>
              <TouchableOpacity
                style={styles.disconnect}
                onPress={async () => {
                  try {
                    const userId = await AsyncStorage.getItem("id");
                    await disconnect({ variables: { id: userId } });
                    navigation.navigate("Account");
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.disconnect}
                onPress={() => {
                  navigation.navigate("Account");
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

DisconnectModal.propTypes = {
  navigation: PropTypes.object.isRequired,
  disconnect: PropTypes.func.isRequired
};

export default compose(graphql(DISCONNECT_ACCOUNT, { name: "disconnect" }))(
  DisconnectModal
);
