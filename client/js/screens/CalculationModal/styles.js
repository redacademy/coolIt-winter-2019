import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: "60%",
    marginLeft: "10%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "40%",
    width: "80%",
    borderRadius: 20
  },
  textGroup: {
    paddingTop: 20
  },
  backButton: {
    width: "10%"
  },
  icon: {
    marginRight: "85vh"
  }
});

export default styles;
