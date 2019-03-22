import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  icon: {
    marginLeft: 20,
    marginTop: 20
  },
  name: {
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: fonts.bold,
    fontWeight: "500",
    textAlign: "center"
  },
  description: {
    paddingTop: 25,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.light,
    marginHorizontal: 10
  },
  buttonContainer: {
    marginTop: 25,
    flex: 1,
    alignItems: "center"
  },
  dismiss: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
    marginBottom: 25,
    marginTop: 25,
    padding: 5
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  community:{
    paddingBottom: 25,
    marginBottom: 25
  }
});

export default styles;
