import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    height: "100%"
  },

  header: {
    fontFamily: fonts.light,
    fontWeight: "400",
    padding: 15,
    textAlign: "center",
    fontSize: 16
  },

  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  disconnect: {
    width: "40%",
    backgroundColor: colors.white,
    borderRadius: 13,
    borderColor: colors.blue,
    borderWidth: 2,
    marginBottom: 25,
    
  },
  scrollView: {
    paddingTop: "50%",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  buttonAligner: {
    flexDirection: "row",
    justifyContent: "space-around"

  }
});

export default styles;
