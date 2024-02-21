import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthStackParamList} from "@/navigation/types";
import WelcomeScreen from "@/screens/welcome-screen";
import SignUpScreen from "@/screens/sign-up-screen";
import SignInScreen from "@/screens/sign-in-screen";
import ForgotPasswordScreen from "@/screens/forgot-password-screen";
import ResetPasswordScreen from "@/screens/reset-password-screen";
import VerifyPhoneNumberScreen from "src/screens/verify-phone-number-screen";

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