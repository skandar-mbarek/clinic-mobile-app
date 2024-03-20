import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "@/navigation/mainNavigation/auth-stack-navigator";
import {getToken} from "@/services/config/secureStore-config";
import {USER_TOKEN} from "@/Constants/global-const";
import {Box} from "@/utils/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setToken} from "@/store/actions";
import AppStackNavigator from "@/navigation/mainNavigation/app-stack-navigator";


const Navigation = () => {
    const [mount, setMounted] = useState(false)
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.data)

    const fetchData = async () => {
        try {
            const _user = await getToken(USER_TOKEN);
            dispatch(setToken(_user))
            setMounted(true)
        } catch (e) {
            console.error("error in navigation", e)
        }
    }

    useEffect(() => {

        fetchData();
    }, [])


    return (

        <NavigationContainer>

            {mount ? (
                    <Box flex={1}>
                        {token.token ? (

                            <AppStackNavigator/>) : (
                            <AuthStackNavigator/>)}
                    </Box>) :
                null
            }

        </NavigationContainer>


    );
};

export default Navigation;