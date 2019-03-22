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
import Activities from "../screens/Activities";
import LogIn from "../screens/LogIn";
import Landing from "../screens/Landing";
import ProgramCode from "../screens/ProgramCode";
import AccountCreated from "../screens/AccountCreated";
import TakeQuiz from "../screens/TakeQuiz";
import CarbonQuiz from "../screens/CarbonQuiz";
import Score from "../screens/Score";
import BeginChallenge from "../screens/BeginChallenge";

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

const OnboardingStack = createStackNavigator(
  {
    Landing: Landing,
    ProgramCode: ProgramCode,
    JoinUs: JoinUs,
    AccountCreated: AccountCreated,
    TakeQuiz: TakeQuiz,
    CarbonQuiz: CarbonQuiz,
    Score: Score,
    BeginChallenge: BeginChallenge,
    Activity: Activities
  },
  {
    headerMode: "none",
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const LoginStack = createStackNavigator(
  {
    Landing: Landing,
    LogIn: LogIn,
    Activity: Activities
  },
  {
    headerMode: "none",
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
      Auth: OnboardingStack,

      Login: LoginStack
    },
    {
      initialRouteName: "App"
    }
  )
);
