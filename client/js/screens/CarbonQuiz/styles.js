import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 80
  },
  subHeader: { paddingLeft: 10, width: 275, color: "grey" },
  stepIndicator: {
    marginBottom: 20,
    marginTop: 0,
    paddingTop: 0
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
  },
  button: {
    backgroundColor: "#4F6638",
    width: "35%",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 15
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center"
  },
  disabledButton: {
    backgroundColor: "#B9C2AF",
    width: "35%",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 15
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  singleButtonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default styles;
