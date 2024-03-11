import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "@/navigation/auth-stack-navigator";
import {getToken, resetToken} from "@/services/config/secureStore-config";
import {USER_TOKEN} from "@/Constants/global-const";
import {Text} from "@/utils/theme";

const Navigation = () => {

    const [user,setUser] = useState<string|null>(null);
    useEffect(()=>{
        const fetchData = async ()=>{
        try {
            const _user = await getToken(USER_TOKEN);
            console.log("User:", _user);

            setUser(_user);
        }catch (e){
            console.error("error in navigation",e)
        }
        }
        fetchData();
    },[user])


    return (
        <NavigationContainer>

            {user!==null ? (<Text>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Text>) : (<AuthStackNavigator/>)}

        </NavigationContainer>

    );
};

export default Navigation;