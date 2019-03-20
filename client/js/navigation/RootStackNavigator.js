import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import ActivityModal from "../screens/ActivityModal";

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Activity: ActivityModal
    },
    {
      mode: "modal",
      headerMode: "none",
      navigationOptions: {
        headerVisible: false
      }
    }
  )
);
