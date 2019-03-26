import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get("window").height,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  activityContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-around"
  },
  navigationButton: {
    paddingVertical: 10,
  },

  name: {
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: fonts.bold,
    fontWeight: "500",
    paddingVertical: 10,
  
  },
  description: {
    padding: 5,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.light,
    marginHorizontal: 10
  },

  dismiss: {
    alignSelf: "center",
    minWidth: "50%",
    backgroundColor: colors.green,
    borderRadius: 13,
    padding: 5,
    marginVertical: 10
  },

  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default styles;
