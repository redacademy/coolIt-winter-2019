import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import ActivityModal from "../screens/ActivityModal";
import JoinUs from "../screens/JoinUs";
import AuthLoadingScreen from "../screens/AutheticationLoadingScreen";
import {sharedNavigationOptions} from "./config";
import DisconnectModal from "../screens/DisconnectModal";

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Activity: ActivityModal,
    Disconnect: DisconnectModal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {SignIn: JoinUs},
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
