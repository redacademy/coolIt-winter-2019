import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    marginLeft: "10%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "35%",
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
    paddingLeft: "5%",
    paddingTop: "3%"
  },
  checkmark: {
    paddingBottom: 20
  },
  text: {
    textAlign: "center",
    fontSize: 18
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  spacer: {
    height: "30%",
    width: "100%"
  },
  background: {
    width: "100%",
    height: "110%"
  },
  icon: {
    height: 35
  }
});

export default styles;
