import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  itemSeparator: {
    height: 5,
    backgroundColor: colors.green,
    paddingTop: 5,
    width: "70%"
  },
  itemBottomSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%",
    position: "absolute",
    right: 0,
    top: 60
  },
  description: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.bold
  },
  metricsContainer: {
    paddingTop: 45,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  metric: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  metric2: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: colors.green,
    paddingHorizontal: 7
  },
  iconGroup: {
    flex: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  icon: {
    width: "25%",
    height: 100,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  iconImage: { paddingHorizontal: 15 },
  dateButtonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "green",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: "20%",
    color: colors.green
  },
  dateButtonSelected: {
    borderWidth: 1,
    backgroundColor: colors.green,

    borderColor: "green",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: "20%"
  },
  buttonText: { width: "100%", textAlign: "center" },
  buttonTextSelected: { width: "100%", textAlign: "center", color: "#ffffff" },
  footerContainer: { paddingTop: 20 },
  footerContent: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  footerIcons: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
