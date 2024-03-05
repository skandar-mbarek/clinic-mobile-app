import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "@/navigation/auth-stack-navigator";

const Navigation = () => {

    const token : boolean = true

    return (
        <NavigationContainer>

            <AuthStackNavigator/>

        </NavigationContainer>

    );
};

export default Navigation;