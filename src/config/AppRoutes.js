import {
  StackNavigator,
} from 'react-navigation';

import SignUp from '../components/signup';
import Login from '../components/login/index';
// import RateUS from '../components/appTip/rateUs';
import PasswordRecovery from '../components/login/passwordRecovery';
import Tabs from '../components/common/mainTab';
import WelcomeComponent from '../components/signup/welcome';
import * as Food from "../components/food";
// import { AddStrengthManually } from "../components/exercise"

// import RenderGallery from '../components/common/Camera';

export const AppRoutes = StackNavigator({

  // Log: { screen: AddStrengthManually },
  // RateUS:{screen:RateUS},
  Login: { screen: Login },

  PasswordRecovery: { screen: PasswordRecovery },

  SignUp: { screen: SignUp },

  WelcomeComponent: { screen: WelcomeComponent },

  Tabs: { screen: Tabs },


  // CameraComponent: { screen: RenderGallery },

});

export default AppRoutes;