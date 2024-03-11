import {CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";

export type AuthStackParamList = {
    Welcome: undefined
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
    ResetPassword: {
        phoneNumber: string
    }
    VerifyPhoneNumber: {
        phoneNumber: string
    }
}

export type RootBottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    DoctorsStack : NavigatorScreenParams<DoctorStackParamList>
    AppointmentStack:NavigatorScreenParams<AppointmentStackParamList>
    ConsultationStack:NavigatorScreenParams<ConsultationStackParamList>
    ProfileStack : NavigatorScreenParams<ProfileStackParamList>
}
export type HomeStackParamList = {
    Home : undefined
}
export type DoctorStackParamList = {
    Doctors : undefined
}
export type AppointmentStackParamList = {
    Appointments : undefined
}
export type ConsultationStackParamList ={
    Consultations : undefined
}

export type ProfileStackParamList ={
    Profile : undefined
}

export type AppStackParamList = {
    Root : NavigatorScreenParams<RootBottomTabParamList>
}

export type RootStackParamList = {
    AppStack: NavigatorScreenParams<AppStackParamList>
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
        NativeStackNavigationProp<AppStackParamList, "Root">
    >

export type RootTabScreenProps<Screen extends keyof RootBottomTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootBottomTabParamList, Screen>,
        NativeStackScreenProps<RootBottomTabParamList>
    >