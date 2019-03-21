import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  description: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.bold
  },
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
    top: 70
  },
  mainContent: {
    paddingTop: 25
  },
  bottom: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 25,
    marginTop: 25
  },
  valley: {
    resizeMode: "cover",
    paddingTop: 25,
    marginTop: 25
  },
  container: {
    height: Dimensions.get("window").height,
    paddingTop: 25
  },
  contentContainer: {
    paddingTop: 25
  },

  buttonSeparator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    margin: 2
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: fonts.light,
    padding: 12
  },
  menu: {
    paddingTop: 25
  }

  //   bottom: {
  //     flex: 1,
  //     justifyContent: "space-around"
  //     justifyContent: "space-around",
  //     paddingTop: 25
  //   },
  //   valley: {
  //     resizeMode: "cover"
  //     resizeMode: "cover",
  //     paddingTop: 25,
  //     marginTop: 25
  //   },
  //   container: {
  //     height: Dimensions.get("window").height
  //     height: Dimensions.get("window").height,
  //     paddingTop: 25
  //   },
  //   contentContainer: {
  //     paddingTop: 25
  //   }
  // });
});

export default styles;
