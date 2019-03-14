import {
  createStackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import ActivityModal from "../screens/ActivityModal";
import JoinUs from "../screens/JoinUs";
const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Activity: ActivityModal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator({ SignIn: JoinUs });

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
