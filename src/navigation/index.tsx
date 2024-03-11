import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "@/navigation/auth-stack-navigator";
import {getToken} from "@/services/config/secureStore-config";
import {USER_TOKEN} from "@/Constants/global-const";
import {Text} from "@/utils/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setToken} from "@/store/actions";


const Navigation = () => {

    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.data)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const _user = await getToken(USER_TOKEN);
                console.log("User:", _user);
                dispatch(setToken(_user))
            } catch (e) {
                console.error("error in navigation", e)
            }
        }
         fetchData();
    }, [])


    return (
        <NavigationContainer>

            {token.token !== null ? (
                <Text>zzzzzzzzzzzzzzzzz</Text>) : (
                <AuthStackNavigator/>)}

        </NavigationContainer>

    );
};

export default Navigation;