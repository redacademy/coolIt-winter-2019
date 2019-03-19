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
    borderColor: "#4aae4f",
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 0.5,
    borderRadius: 10
  },
  normal: {
    borderColor: "#ffffff",
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 0.5,
    borderRadius: 10
  }
});

export default styles;
