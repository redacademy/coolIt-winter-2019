import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import ActivityModal from "../screens/ActivityModal";
import JoinUs from "../screens/JoinUs";
import AuthLoadingScreen from "../components/AutheticationLoadingScreen/AuthenticationLoadingScreen";
import { sharedNavigationOptions } from "./config";
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

const AuthStack = createStackNavigator(
  { SignIn: JoinUs },
  {
    defaultNavigationOptions: ({ navigation }) => ({
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
