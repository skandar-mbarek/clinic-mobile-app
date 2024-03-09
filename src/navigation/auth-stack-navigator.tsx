import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthStackParamList} from "@/navigation/types";
import WelcomeScreen from "src/screens/auth-screens/welcome-screen";
import SignUpScreen from "src/screens/auth-screens/sign-up-screen";
import SignInScreen from "src/screens/auth-screens/sign-in-screen";
import ForgotPasswordScreen from "src/screens/auth-screens/forgot-password-screen";
import ResetPasswordScreen from "src/screens/auth-screens/reset-password-screen";
import VerifyPhoneNumberScreen from "src/screens/auth-screens/verify-phone-number-screen";

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