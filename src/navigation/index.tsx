import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "@/navigation/auth-stack-navigator";

const Navigation = () => {


    return (
        <NavigationContainer>

            <AuthStackNavigator/>

        </NavigationContainer>

    );
};

export default Navigation;