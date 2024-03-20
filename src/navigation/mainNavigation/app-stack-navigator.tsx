import React, {useEffect} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppStackParamList} from "@/navigation/types";
import BottomTabNavigator from "@/navigation/bottomNavigation/bottom-tab-navigator";
import {useDispatch} from "react-redux";
import {getUser} from "@/store/actions";
import {ActionType} from "@/store/reducers";

const Stack = createNativeStackNavigator<AppStackParamList>()
const AppStackNavigator = () => {
    const dispatch = useDispatch()


    const fetchData = async ()=>{
        try {
            dispatch(getUser());

        }catch (e){
            console.log("AppStackNavigator error : ",e)
        }
    }
    useEffect(() => {

        fetchData()
    }, [])



    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Root"}
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;