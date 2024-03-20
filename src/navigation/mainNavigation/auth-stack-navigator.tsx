import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthStackParamList} from "@/navigation/types";
import WelcomeScreen from "@/screens/auth-screens/welcome-screen";
import SignUpScreen from "@/screens/auth-screens/sign-up-screen";
import SignInScreen from "@/screens/auth-screens/sign-in-screen";
import ForgotPasswordScreen from "@/screens/auth-screens/forgot-password-screen";
import ResetPasswordScreen from "@/screens/auth-screens/reset-password-screen";
import VerifyPhoneNumberScreen from "@/screens/auth-screens/verify-phone-number-screen";
import {StatusBar} from "expo-status-bar";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {


    return (

        <Stack.Navigator>
            <Stack.Screen name={"Welcome"} component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignUp"} component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignIn"} component={SignInScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ForgotPassword"} component={ForgotPasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ResetPassword"} component={ResetPasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"VerifyPhoneNumber"} component={VerifyPhoneNumberScreen}
                          options={{headerShown: false}}/>
        </Stack.Navigator>

    );
};

export default AuthStackNavigator;