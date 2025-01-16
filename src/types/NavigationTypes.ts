import { NavigationProp } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

export type RootStackParamList = {
  IntroScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
};

export type IntroScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "IntroScreen"
>;

export type LoginScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "LoginScreen"
>;

export type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "HomeScreen"
>;
