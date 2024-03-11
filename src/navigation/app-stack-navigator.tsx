import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppStackParamList} from "@/navigation/types";
import BottomTabNavigator from "@/navigation/bottom-tab-navigator";

const Stack = createNativeStackNavigator<AppStackParamList>()
const AppStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Root"}
                component={BottomTabNavigator}
                options={{
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;