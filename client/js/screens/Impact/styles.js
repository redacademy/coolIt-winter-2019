import { StyleSheet } from "react-native";
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
  headerContainer: { marginTop: 60 },
  description: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.bold,
    paddingTop: 10
  },
  metricsContainer: {
    paddingTop: 45,

    flexDirection: "row",
    justifyContent: "space-around"
  },
  metric: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  metric2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#87ceeb",
    paddingHorizontal: 12
  },
  metricTitle: { fontWeight: "bold" },
  metricSubtitle: { color: colors.green },
  metricSubtitle2: { color: "#808080" },
  iconGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  icon: {
    width: "25%",
    height: 100,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: { paddingHorizontal: 15 },
  dateButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20
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
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: 35,
    paddingTop: 25
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.green,
    paddingBottom: 8
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%"
  },
  footerText: {
    fontSize: 16,
    color: "#ffffff",
    paddingBottom: 8
  },
  graph: {
    height: 220,
    width: "90%"
  },
  graphSelected: { height: 220 },
  graphContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 220
  }
});

export default styles;
