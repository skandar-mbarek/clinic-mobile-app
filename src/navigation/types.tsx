import {CompositeNavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type AuthStackParamList = {
    Welcome: undefined
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
    ResetPassword: undefined
    VerifyPhoneNumber: undefined
}

export type RootBottomTabParamList = {
    Home: undefined
}

export type RootStackParamList = {
    AppStack: NavigatorScreenParams<RootBottomTabParamList>
    AuthStack: NavigatorScreenParams<AuthStackParamList>
}


declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}
export type AuthScreenNavigationType<RouteName extends keyof AuthStackParamList> =
    CompositeNavigationProp<
        NativeStackNavigationProp<AuthStackParamList, RouteName>,
        NativeStackNavigationProp<RootBottomTabParamList, "Home">
    >