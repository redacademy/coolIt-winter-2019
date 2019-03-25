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
    height: "45%",
    width: "80%",
    borderRadius: 20
  },
  textGroup1: {
    paddingTop: 20
  },
  textGroup2: {
    paddingVertical: 20
  },
  backButton: {
    width: "10%",
    alignSelf: "flex-start",
    paddingBottom: "15%",
    paddingLeft: "4%"
  },
  checkmark: { paddingBottom: 20 },
  text: { textAlign: "center", fontSize: 18 }
});

export default styles;
