import { StyleSheet } from "react-native";
// import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  stepIndicator: {
    marginVertical: 50
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  selected: {
    borderColor: "#4aae4f"
  },
  normal: {
    borderColor: "#ffffff"
  }
});

export default styles;
